import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        borderRadius={20}
        variant="filled"
        placeholder="Search games..."
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
