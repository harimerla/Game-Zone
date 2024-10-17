import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchedInput: (searchText: string) => void;
}

const SearchInput = ({ onSearchedInput }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchedInput(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          variant="filled"
          placeholder="Search games..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
