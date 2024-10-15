import React from "react";
import { Game } from "../hooks/useGames";
import { Image, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden" padding={5}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))} */}
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
