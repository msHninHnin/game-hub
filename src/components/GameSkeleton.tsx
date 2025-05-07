import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GameSkeleton;
