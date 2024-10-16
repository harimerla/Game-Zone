import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
  const { items, error, isLoading } = useData<Genre>("genres");
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImage(item.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Text fontSize="lg">{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
