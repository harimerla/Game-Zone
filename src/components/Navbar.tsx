import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../asserts/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchedInput: (searchValue: string) => void;
  onLogoClick: () => void;
}

const Navbar = ({ onSearchedInput, onLogoClick }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" onClick={onLogoClick} />
      <SearchInput
        onSearchedInput={(searchValue) => onSearchedInput(searchValue)}
      ></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
