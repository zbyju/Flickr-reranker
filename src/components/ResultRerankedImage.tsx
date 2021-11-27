import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { addUpScore } from "../logic/reranking";
import { RerankedPhoto } from "../types/photo";
import RerankedImageDesc from "./RerankedImageDesc";

interface ResultRerankedImageProps {
  rerankedPhoto: RerankedPhoto,
  index: number
}

const ResultRerankedImage = ({ rerankedPhoto, index }: ResultRerankedImageProps) => {
  return (
    <HStack
      bg="grey.100"
      borderY="1px"
      boxShadow="lg"
      borderColor="gray.400"
      style={{ borderCollapse: "collapse" }}
      justifyContent="space-between"
      spacing={0}
      w="100%"
      h="300px"
    >
      <VStack w="190px" minW="190px" h="100%" justify="flex-start" spacing={0}
        borderRight="1px" borderColor="gray.400"
        bg="blue.50">

        <RerankedImageDesc
          title="Rank"
          label={(index + 1).toString() + " (" + rerankedPhoto.oldRank + " " + rerankedPhoto.newRank + ")"}
        />
        <RerankedImageDesc
          title="Name"
          label={rerankedPhoto.photo.title}
          score={addUpScore(rerankedPhoto.scores.scores.resolution)}
        />
        <RerankedImageDesc
          title="Resolution"
          label={`${rerankedPhoto.photo.width_z}x${rerankedPhoto.photo.height_z}`}
          score={addUpScore(rerankedPhoto.scores.scores.resolution)}
        />
        <RerankedImageDesc
          title="Geo"
          label={`${rerankedPhoto.photo.latitude}x${rerankedPhoto.photo.longitude}`}
          score={addUpScore(rerankedPhoto.scores.scores.resolution)}
        />
        <RerankedImageDesc
          title="Date"
          label={`${rerankedPhoto.photo.datetaken}`}
          score={addUpScore(rerankedPhoto.scores.scores.resolution)}
        />

      </VStack>

      <Box flexGrow={1} h="100%">
        <Image h="100%" mx="auto" src={rerankedPhoto.photo.url_z} alt={rerankedPhoto.photo.title} objectFit="contain" />
      </Box>
    </HStack>
  );
}

export default ResultRerankedImage;
