import { HStack, Heading, Field, NumberInput } from "@chakra-ui/react";
import { Tire } from "./useTires";
import { useState } from "react";

interface Props {
  name: string;
  onSelectTire: (tire: Tire) => void;
  selectedTire: Tire | null;
}
/*
<div onClick={() => onSelectTire(tire)}>
<div
  className={
    tire.width === selectedTire?.width
      ? styles.selectedCard
      : styles.card
  }
>
  <h1 className={styles.value}>{tire.diameter}</h1>
</div>
</div>
*/
const TireToCompare = ({ name, onSelectTire, selectedTire }: Props) => {
  const [width, setWidth] = useState("195");
  const [aspectRatio, setAspectRatio] = useState("70");
  const [diameter, setDiameter] = useState("16");
  return (
    <>
      <Heading marginTop={0} marginBottom={0}>
        {name}
      </Heading>
      <HStack gap="10" width="1/2">
        <Field.Root orientation="horizontal">
          <Field.Label>{name}</Field.Label>
          <NumberInput.Root
            value={width}
            onValueChange={(e) => setWidth(e.value)}
          >
            <NumberInput.Input></NumberInput.Input>
          </NumberInput.Root>
        </Field.Root>

        <Field.Root orientation="horizontal">
          <Field.Label>/</Field.Label>
          <NumberInput.Root
            value={aspectRatio}
            onValueChange={(e) => setAspectRatio(e.value)}
          >
            <NumberInput.Input></NumberInput.Input>
          </NumberInput.Root>
        </Field.Root>
        <Field.Root orientation="horizontal">
          <Field.Label>R</Field.Label>
          <NumberInput.Root
            value={diameter}
            onValueChange={(e) => setDiameter(e.value)}
          >
            <NumberInput.Input></NumberInput.Input>
          </NumberInput.Root>
        </Field.Root>
      </HStack>
    </>
  );
};

export default TireToCompare;
