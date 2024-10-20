import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, items, isLoading } = useGames(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
  ];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={0.5}>
      {isLoading &&
        skeletons.map((s, index) => (
          <GameCardSkeleton key={index}>
            <SkeletonCard />
          </GameCardSkeleton>
        ))}
      {items.map((item) => (
        <GameCardSkeleton key={item.id}>
          <GameCard game={item} />
        </GameCardSkeleton>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
