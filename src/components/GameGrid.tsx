import useGames, { Platform } from "./hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "./hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeleton = [1, 2, 3, 4, 5];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeleton.map((skeleton) => (
          <GameCardContainer
            key={skeleton}
            childern={<GameCardSkeleton />}
          ></GameCardContainer>
        ))}
      {data.map((data) => (
        <GameCardContainer
          key={data.id}
          childern={<GameCard game={data} />}
        ></GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
