import { ChevronDownIcon, ChevronUpIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

interface ImageRankProps {
  title: string
  newRank: number
  oldRank: number
}

const ImageRank = ({ title, newRank, oldRank }: ImageRankProps) => {
  const diff = oldRank - newRank
  const diffStr = Math.abs(diff).toString()
  return (
    <Box
      px={2} py={1}
      w="100%"
      borderBottom="1px"
      borderColor="blue.100"
      style={{ borderCollapse: "collapse" }}
      _hover={{
        background: "rgb(225, 238, 250)"
      }}
      transition="0.3s all"
    >
      <Text>
        <b>{title} </b>
        ({
          diff > 0 ? (<><ChevronUpIcon p="0" mx="-1" pb="2px" w={7} h={8} color="green.500" /><Text as="span">+{diffStr}</Text></>)
            :
            diff < 0 ? (<><ChevronDownIcon p="0" mx="-1" pb="2px" w={7} h={8} color="red.500" /><Text as="span">-{diffStr}</Text></>)
              :
              (<><MinusIcon p="0" pb="2px" w={5} h={8} color="blue.500" /><Text as="span"></Text></>)
        })
        <b>: </b>{newRank}
      </Text>
    </Box >
  );
}

export default ImageRank;
