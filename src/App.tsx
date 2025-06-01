import { useState } from "react";
import ComboBox from "./TireToCompare";
import { Heading, Button, Stack } from "@chakra-ui/react";

export interface Wheel {
  width: number;
  height: number;
  diameter: number;
  offset: number;
  wheelWidth: number;
  sidewall: number;
  rim: number;
  rimDiameter: number;
  tireDiameter: number;
  circumference: number;
  revolutionPerKm: number;
}

function CalcDifference(currentWheel: Wheel, newWheel: Wheel) {
  //sidewall height
  currentWheel.sidewall = currentWheel.width * (currentWheel.offset / 100);
  newWheel.sidewall = newWheel.width * (newWheel.offset / 100);

  // rim diameter
  // convert rim in inches to millimeter
  currentWheel.rimDiameter = currentWheel.rim * 25.4;
  newWheel.rimDiameter = newWheel.rim * 25.4;

  // tire diameter
  currentWheel.tireDiameter = currentWheel.rim + 2 * currentWheel.sidewall;
  newWheel.tireDiameter = newWheel.rim + 2 * newWheel.sidewall;

  // circumference
  currentWheel.circumference = 3.1415926 * currentWheel.diameter;
  newWheel.circumference = 3.1415926 * newWheel.diameter;

  // revolution per km
  // there are 1,000,000 mm in a kilmeter
  currentWheel.revolutionPerKm = 1000000 / currentWheel.circumference;
  newWheel.revolutionPerKm = 1000000 / newWheel.circumference;

  console.log(currentWheel);
  console.log(newWheel);
}

function App() {
  const [currentTireQuery, setCurrentTireQuery] = useState<Wheel>({} as Wheel);
  const [newTireQuery, setNewTireQuery] = useState<Wheel>({} as Wheel);

  return (
    <>
      <Stack>
        <ComboBox
          onSelectWheelDiameter={(diameter) =>
            setCurrentTireQuery({ ...currentTireQuery, diameter })
          }
          onSelectTireHeight={(height) =>
            setCurrentTireQuery({ ...currentTireQuery, height })
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
          onSelectTireHeight={(height) =>
            setNewTireQuery({ ...newTireQuery, height })
          }
          onSelectTireWidth={(width) =>
            setNewTireQuery({ ...newTireQuery, width })
          }
          setOffset={(offset) =>
            setCurrentTireQuery({ ...newTireQuery, offset })
          }
          setWheelWidth={(wheelWidth) =>
            setCurrentTireQuery({ ...newTireQuery, wheelWidth })
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
          TireDiameter: {currentTireQuery.tireDiameter}
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
