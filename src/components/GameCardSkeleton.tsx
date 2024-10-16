import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardSkeleton = ({ children }: Props) => {
  return (
    <Box borderRadius="10px" overflow="hidden" padding={2}>
      {children}
    </Box>
  );
};

export default GameCardSkeleton;
