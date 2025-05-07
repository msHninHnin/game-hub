import useGenre from "../hook/useGenre";
import {
  List,
  ListItem,
  HStack,
  Button,
  Image,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, loading } = useGenre();
  if (loading) return <Spinner />;
  return (
    <>
      <List>
        {genres.map((g) => (
          <ListItem paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={g.image_background} />
              <Button
                whiteSpace="normal"
                onClick={() => onSelectGenre(g)}
                fontSize="lg"
                variant="link"
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
