import { useEffect, useState } from "react";
import ComboBox from "./TireToCompare";
import { Heading, Button, Stack } from "@chakra-ui/react";

export interface Wheel {
  width: number;
  aspectRatio: number;
  diameter: number;
  wheelWidth: number;
  sidewall: number;
  rimDiameter: number;
  wheelDiameter: number;
  circumference: number;
  revolutionPerKm: number;
  offset: number;
}

function CalcDifference(currentWheel: Wheel, newWheel: Wheel) {
  // rim diameter
  // convert rim in inches to millimeter
  currentWheel.rimDiameter = currentWheel.diameter * 25.4;
  newWheel.rimDiameter = newWheel.diameter * 25.4;

  //sidewall height
  currentWheel.sidewall = currentWheel.width * (currentWheel.aspectRatio / 100);
  newWheel.sidewall = newWheel.width * (newWheel.aspectRatio / 100);

  // tire diameter
  currentWheel.wheelDiameter =
    currentWheel.rimDiameter + 2 * currentWheel.sidewall;
  newWheel.wheelDiameter = newWheel.rimDiameter + 2 * newWheel.sidewall;

  // circumference
  currentWheel.circumference = Math.PI * currentWheel.wheelDiameter;
  newWheel.circumference = Math.PI * newWheel.wheelDiameter;

  // revolution per km
  // there are 1,000,000 mm in a kilmeter
  currentWheel.revolutionPerKm = 1000000 / currentWheel.circumference;
  newWheel.revolutionPerKm = 1000000 / newWheel.circumference;
}

function App() {
  const [currentTireQuery, setCurrentTireQuery] = useState<Wheel>({} as Wheel);
  const [newTireQuery, setNewTireQuery] = useState<Wheel>({} as Wheel);

  useEffect(() => {
    console.log("current", currentTireQuery);
    console.log("new", newTireQuery);
  }, [currentTireQuery, newTireQuery]);

  return (
    <>
      <Stack>
        <ComboBox
          onSelectWheelDiameter={(diameter) =>
            setCurrentTireQuery({ ...currentTireQuery, diameter })
          }
          onSelectAspectRatio={(aspectRatio) =>
            setCurrentTireQuery({ ...currentTireQuery, aspectRatio })
          }
          onSelectTireWidth={(width) =>
            setCurrentTireQuery({ ...currentTireQuery, width })
          }
          setOffset={(offset) =>
            setCurrentTireQuery({ ...currentTireQuery, offset })
          }
          setWheelWidth={(wheelWidth) =>
            setCurrentTireQuery({ ...currentTireQuery, wheelWidth })
          }
        ></ComboBox>
        <ComboBox
          onSelectWheelDiameter={(diameter) =>
            setNewTireQuery({ ...newTireQuery, diameter })
          }
          onSelectAspectRatio={(aspectRatio) =>
            setNewTireQuery({ ...newTireQuery, aspectRatio })
          }
          onSelectTireWidth={(width) =>
            setNewTireQuery({ ...newTireQuery, width })
          }
          setOffset={(offset) => setNewTireQuery({ ...newTireQuery, offset })}
          setWheelWidth={(wheelWidth) =>
            setNewTireQuery({ ...newTireQuery, wheelWidth })
          }
        ></ComboBox>
        <Button
          bg="bg.subtle"
          variant="outline"
          width="1/2"
          onClick={() => CalcDifference(currentTireQuery, newTireQuery)}
        >
          Submit
        </Button>

        <Heading fontSize="2xl" marginBottom={3}>
          Sidewall: {currentTireQuery.sidewall}
        </Heading>
        <Heading fontSize="2xl" marginBottom={3}>
          RimDiameter: {currentTireQuery.rimDiameter}
        </Heading>
        <Heading fontSize="2xl" marginBottom={3}>
          WheelDiameter: {currentTireQuery.wheelDiameter}
        </Heading>
        <Heading fontSize="2xl" marginBottom={3}>
          Circumference: {currentTireQuery.circumference}
        </Heading>
        <Heading fontSize="2xl" marginBottom={3}>
          RevolutionPerKm: {currentTireQuery.revolutionPerKm}
        </Heading>
      </Stack>
    </>
  );
}

export default App;
