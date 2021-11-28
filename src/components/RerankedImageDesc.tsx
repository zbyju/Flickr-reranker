import { Box, Text } from "@chakra-ui/react";

interface RerankedImageDescProps {
  title: string
  score?: number
  label: string
}

const RerankedImageDesc = ({ title, score, label }: RerankedImageDescProps) => {
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
        <b>{title}</b>
        {score !== undefined && <i> (Score: {score.toFixed(2)})</i>}
        <b>: </b>
        {label}
      </Text >
    </Box >
  );
}

export default RerankedImageDesc;
