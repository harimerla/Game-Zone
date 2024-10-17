import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenres}
            onSelectedLink={(item) => setSelectedGenres(item)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenres={selectedGenres} />
      </GridItem>
    </Grid>
  );
};

export default App;
