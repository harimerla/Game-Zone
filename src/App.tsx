import React, { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import { platform } from "os";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <Navbar
          onLogoClick={() => {
            setGameQuery({} as GameQuery);
          }}
          onSearchedInput={(searchValue) =>
            setGameQuery({ ...gameQuery, search: searchValue })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedLink={(item) =>
              setGameQuery({ ...gameQuery, genre: item })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
            />
            <SortSelector
              sortBy={gameQuery.sortOrder}
              onSelectedItem={(order) =>
                setGameQuery({ ...gameQuery, sortOrder: order })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
