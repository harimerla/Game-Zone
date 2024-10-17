import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenres: Genre | null;
}

const GameGrid = ({ selectedGenres }: Props) => {
  const { error, items, isLoading } = useGames(selectedGenres);
  const skeletons = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
  ];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={0.5}>
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
    </>
  );
};

export default GameGrid;
