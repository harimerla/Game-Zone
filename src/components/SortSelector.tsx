import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedItem: (orderBy: string) => void;
  sortBy: string;
}

const SortSelector = ({ sortBy, onSelectedItem }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Avergae rating" },
  ];
  const [selectedOrder, setSelectedOrder] = useState("Relevence");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        {sortOrder.find((order) => order.value == sortBy)?.label ||
          "Relevence "}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            key={order.label}
            onClick={() => {
              onSelectedItem(order.value);
              setSelectedOrder(order.label);
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
