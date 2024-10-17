import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../asserts/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchedInput: (searchValue: string) => void;
}

const Navbar = ({ onSearchedInput }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput
        onSearchedInput={(searchValue) => onSearchedInput(searchValue)}
      ></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
