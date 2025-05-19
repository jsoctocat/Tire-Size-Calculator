import { useEffect, useState } from "react";
import ComboBox from "./TireToCompare";
import { Heading, Button, Stack } from "@chakra-ui/react";

export interface Wheel {
  width: string[] | null;
  height: string[] | null;
  diameter: string[] | null;
  offset: string | null;
  wheelWidth: string | null;
}

function Calc(currentTire: Wheel, newTire: Wheel) {
  console.log("triggered");
  return Number(currentTire.width) - Number(newTire.width);
}

function App() {
  const [currentTireQuery, setCurrentTireQuery] = useState<Wheel>({} as Wheel);
  const [newTireQuery, setNewTireQuery] = useState<Wheel>({} as Wheel);
  const [result, setResult] = useState(1);

  useEffect(() => {
    setResult(Number(Calc(currentTireQuery, newTireQuery)));
  }, [currentTireQuery, newTireQuery]);

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
          offsetValue={"50"}
          setWheelWidth={(wheelWidth) =>
            setCurrentTireQuery({ ...currentTireQuery, wheelWidth })
          }
          wheelWidthValue={"6"}
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
            setCurrentTireQuery({ ...currentTireQuery, offset })
          }
          offsetValue={"60"}
          setWheelWidth={(wheelWidth) =>
            setCurrentTireQuery({ ...currentTireQuery, wheelWidth })
          }
          wheelWidthValue={"8"}
        ></ComboBox>
        <Button
          bg="bg.subtle"
          variant="outline"
          width="1/2"
          onClick={() =>
            setResult(Number(Calc(currentTireQuery, newTireQuery)))
          }
        >
          Submit
        </Button>

        <Heading fontSize="2xl" marginBottom={3}>
          Result: {result}
        </Heading>
      </Stack>
    </>
  );
}

export default App;
