import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="red">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
