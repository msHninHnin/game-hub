import react from "react";
import usePlatform from "../hook/usePlatform";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton> Platforms</MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={(platform) => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
