import react from "react";
import usePlatform from "../hook/usePlatform";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortPlatform = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Released Date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Rating",
    },
  ];

  const currentOrder = sortOrders.find((order) => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton> Order by :{currentOrder?.label || "Relevance"}</MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortPlatform;
