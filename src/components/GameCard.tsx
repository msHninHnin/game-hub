import Game from "./useGame";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import Score from "./Score";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Score score={game.metacritic}></Score>
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
