import { Platform } from "../hook/useGame";
import { Text } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}
const PlatformList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};
export default PlatformList;
