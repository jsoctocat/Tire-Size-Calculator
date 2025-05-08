import { useEffect, useState } from "react";
import { Tire } from "./useTires";
import TireToCompare from "./TireToCompare";
import { Stack, Heading, Button } from "@chakra-ui/react";

interface TireQuery {
  tire: Tire;
}

function Calc(currentTire: Tire, newTire: Tire) {
  return 100;
}

function App() {
  const [currentTireQuery, setCurrentTireQuery] = useState<TireQuery>(
    {} as TireQuery
  );
  const [newTireQuery, setNewTireQuery] = useState<TireQuery>({} as TireQuery);
  const [result, setResult] = useState(1);

  useEffect(() => {
    setResult(Number(Calc(currentTireQuery.tire, newTireQuery.tire)));
  }, [currentTireQuery, newTireQuery]);

  return (
    <>
      <Stack>
        <TireToCompare
          name="Current Tire Size:"
          selectedTire={currentTireQuery.tire}
          onSelectTire={(tire) =>
            setCurrentTireQuery({ ...currentTireQuery, tire })
          }
        ></TireToCompare>

        <TireToCompare
          name="New Tire Size:"
          selectedTire={newTireQuery.tire}
          onSelectTire={(tire) => setNewTireQuery({ ...newTireQuery, tire })}
        ></TireToCompare>

        <Button
          bg="bg.subtle"
          variant="outline"
          width="1/2"
          onClick={() =>
            setResult(Number(Calc(currentTireQuery.tire, newTireQuery.tire)))
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
