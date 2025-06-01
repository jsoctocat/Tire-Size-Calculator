import {
  createListCollection,
  HStack,
  Portal,
  Select,
  Field,
  NumberInput,
} from "@chakra-ui/react";
import wheelData from "./wheelData";
import { useMemo } from "react";

interface Props {
  onSelectWheelDiameter: (WheelDiameter: number) => void;
  onSelectTireHeight: (tireHeight: number) => void;
  onSelectTireWidth: (tireWidth: number) => void;
  setOffset: (wheelOffset: number) => void;
  setWheelWidth: (wheelWidth: number) => void;
}

const ComboBox = ({
  onSelectWheelDiameter,
  onSelectTireHeight,
  onSelectTireWidth,
  setOffset,
  setWheelWidth,
}: Props) => {
  const { diameter, height, width } = wheelData();

  const wheelDiameterCollection = useMemo(() => {
    return createListCollection({
      items: diameter ?? [],
      itemToString: (WheelDiameter) => String(WheelDiameter.diameter),
      itemToValue: (WheelDiameter) => String(WheelDiameter.diameter),
    });
  }, [diameter]);

  const tireHeightCollection = useMemo(() => {
    return createListCollection({
      items: height ?? [],
      itemToString: (tireHeight) => String(tireHeight.height),
      itemToValue: (tireHeight) => String(tireHeight.height),
    });
  }, [height]);

  const tireWidthCollection = useMemo(() => {
    return createListCollection({
      items: width ?? [],
      itemToString: (tireWidth) => String(tireWidth.width),
      itemToValue: (tireWidth) => String(tireWidth.width),
    });
  }, [width]);

  return (
    <>
      <HStack maxW="500px">
        <Select.Root
          collection={wheelDiameterCollection}
          size="sm"
          width="500px"
          onValueChange={(e) => onSelectWheelDiameter(Number(e.value))}
        >
          <Select.HiddenSelect />
          <Select.Label>Diameter</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Diameter" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {wheelDiameterCollection.items.map((WheelDiameter) => (
                  <Select.Item
                    item={WheelDiameter}
                    key={WheelDiameter.diameter}
                  >
                    {WheelDiameter.diameter}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Select.Root
          collection={tireHeightCollection}
          size="sm"
          width="500px"
          onValueChange={(e) => onSelectTireHeight(Number(e.value))}
        >
          <Select.HiddenSelect />
          <Select.Label>Height</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Height" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {tireHeightCollection.items.map((tireHeight) => (
                  <Select.Item item={tireHeight} key={tireHeight.height}>
                    {tireHeight.height}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Select.Root
          collection={tireWidthCollection}
          size="sm"
          width="500px"
          onValueChange={(e) => onSelectTireWidth(Number(e.value))}
        >
          <Select.HiddenSelect />
          <Select.Label>Width</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Width" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {tireWidthCollection.items.map((tireWidth) => (
                  <Select.Item item={tireWidth} key={tireWidth.width}>
                    {tireWidth.width}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Field.Root orientation="vertical">
          <Field.Label>OFFSET</Field.Label>
          <NumberInput.Root onValueChange={(e) => setOffset(Number(e.value))}>
            <NumberInput.Input></NumberInput.Input>
          </NumberInput.Root>
        </Field.Root>
        <Field.Root orientation="vertical">
          <Field.Label>Wheel Width</Field.Label>
          <NumberInput.Root
            onValueChange={(e) => setWheelWidth(Number(e.value))}
          >
            <NumberInput.Input></NumberInput.Input>
          </NumberInput.Root>
        </Field.Root>
      </HStack>
    </>
  );
};

export default ComboBox;
