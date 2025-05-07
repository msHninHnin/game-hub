import react, { useState, useEffect } from "react";
import { Text, SimpleGrid } from "@chakra-ui/react";
import useGame from "../hook/useGame";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, loading } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {loading && skeletons.map((s) => <GameSkeleton />)}
        {games.map((g) => (
          <GameCard id={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
