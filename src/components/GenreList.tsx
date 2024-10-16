import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { items, error, isLoading } = useData<Genre>("genres");
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
