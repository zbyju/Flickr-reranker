import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { addUpScore } from "../logic/reranking";
import { RerankedPhoto } from "../types/photo";
import ImageRank from "./ImageRank";
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
      h="350px"
    >
      <VStack w="190px" minW="225px" h="100%" justify="flex-start" spacing={0}
        borderRight="1px" borderColor="gray.400"
        bg="blue.50">

        <ImageRank
          title="Rank"
          oldRank={rerankedPhoto.oldRank}
          newRank={rerankedPhoto.newRank}
        />
        <RerankedImageDesc
          title="Title"
          label={rerankedPhoto.photo.title}
          score={addUpScore(rerankedPhoto.scores.scores.title)}
        />
        <RerankedImageDesc
          title="Resolution"
          label={`${rerankedPhoto.photo.width_z}x${rerankedPhoto.photo.height_z}`}
          score={addUpScore(rerankedPhoto.scores.scores.resolution)}
        />
        <RerankedImageDesc
          title="GPS"
          label={`${rerankedPhoto.photo.latitude}x${rerankedPhoto.photo.longitude}`}
          score={addUpScore(rerankedPhoto.scores.scores.gps)}
        />
        <RerankedImageDesc
          title="Date"
          label={`${rerankedPhoto.photo.datetaken}`}
          score={addUpScore(rerankedPhoto.scores.scores.dateTaken)}
        />
        <RerankedImageDesc
          title="Overall score"
          label={`${rerankedPhoto.scores.value.toFixed(2)}`}
        />

      </VStack>

      <Box flexGrow={1} h="100%">
        <Image h="100%" mx="auto" src={rerankedPhoto.photo.url_z} alt={rerankedPhoto.photo.title} objectFit="contain" />
      </Box>
    </HStack>
  );
}

export default ResultRerankedImage;
