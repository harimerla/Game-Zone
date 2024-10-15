import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardSkeleton = ({ children }: Props) => {
  return (
    <Box width="280px" borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardSkeleton;
