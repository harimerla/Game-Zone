import React, { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import { platform } from "os";
import SortSelector from "./components/SortSelector";

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
        <HStack paddingX={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform: platform })
            }
          />
          <SortSelector
            onSelectedItem={(order) =>
              setGameQuery({ ...gameQuery, sortOrder: order })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
