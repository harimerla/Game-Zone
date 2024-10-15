import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
  ];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeletons.map((s) => (
            <GameCardSkeleton>
              <SkeletonCard />
            </GameCardSkeleton>
          ))}
        {games.map((game) => (
          <GameCardSkeleton>
            <GameCard game={game} />
          </GameCardSkeleton>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
