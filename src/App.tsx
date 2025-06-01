import { useEffect, useState } from "react";
import ComboBox from "./TireToCompare";
import { Stack, HStack } from "@chakra-ui/react";

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

function App() {
  const [currentTireQuery, setCurrentTireQuery] = useState<Wheel>({} as Wheel);
  const [newTireQuery, setNewTireQuery] = useState<Wheel>({} as Wheel);

  useEffect(() => {
    // rim diameter
    // convert rim in inches to millimeter
    currentTireQuery.rimDiameter = currentTireQuery.diameter * 25.4;
    newTireQuery.rimDiameter = newTireQuery.diameter * 25.4;

    //sidewall height
    currentTireQuery.sidewall =
      currentTireQuery.width * (currentTireQuery.aspectRatio / 100);
    newTireQuery.sidewall =
      newTireQuery.width * (newTireQuery.aspectRatio / 100);

    // tire diameter
    currentTireQuery.wheelDiameter =
      currentTireQuery.rimDiameter + 2 * currentTireQuery.sidewall;
    newTireQuery.wheelDiameter =
      newTireQuery.rimDiameter + 2 * newTireQuery.sidewall;

    // circumference
    currentTireQuery.circumference = Math.PI * currentTireQuery.wheelDiameter;
    newTireQuery.circumference = Math.PI * newTireQuery.wheelDiameter;

    // revolution per km
    // there are 1,000,000 mm in a kilmeter
    currentTireQuery.revolutionPerKm = 1000000 / currentTireQuery.circumference;
    newTireQuery.revolutionPerKm = 1000000 / newTireQuery.circumference;
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

        <HStack>
          <Stack>
            <div> EXISTING </div>
            <div> Sidewall: {currentTireQuery.sidewall} </div>
            <div> RimDiameter: {currentTireQuery.rimDiameter} </div>
            <div> WheelDiameter: {currentTireQuery.wheelDiameter} </div>
            <div> Circumference: {currentTireQuery.circumference} </div>
            <div> RevolutionPerKm: {currentTireQuery.revolutionPerKm} </div>
          </Stack>

          <Stack>
            <div> NEW </div>
            <div> Sidewall: {newTireQuery.sidewall} </div>
            <div> RimDiameter: {newTireQuery.rimDiameter} </div>
            <div> WheelDiameter: {newTireQuery.wheelDiameter} </div>
            <div> Circumference: {newTireQuery.circumference} </div>
            <div> RevolutionPerKm: {newTireQuery.revolutionPerKm} </div>
          </Stack>
        </HStack>
      </Stack>
    </>
  );
}

export default App;
