import {
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
}

const GenreList = ({ onSelectedLink }: Props) => {
  const { items, error, isLoading } = useData<Genre>("genres");
  if (isLoading) return <Spinner />;
  if (error) return null;
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
            <Link onClick={() => onSelectedLink(item)} fontSize="lg">
              {item.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
