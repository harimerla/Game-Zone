import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectedLink: (item: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedLink, selectedGenre }: Props) => {
  const { items, error, isLoading } = useData<Genre>("genres");
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImage(item.image_background)}
                borderRadius={8}
                boxSize="32px"
                objectFit="cover"
              />
              <Button
                fontWeight={item.id === selectedGenre?.id ? "bold" : ""}
                onClick={() => onSelectedLink(item)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
