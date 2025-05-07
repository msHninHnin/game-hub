import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, ColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={ColorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">DarkMode</Text>
    </HStack>
  );
};
export default ColorModeSwitch;
