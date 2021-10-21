import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";

const ResultImage = ({photo, index}: any) => {
    return (
        <HStack
            bg="grey.100"
            borderY="1px"
            boxShadow="lg"
            borderColor="gray.400"
            style={{borderCollapse: "collapse"}}
            justifyContent="space-between"
            spacing={0}
        >
            <VStack w="500px" h="100%" justify="flex-start" spacing={0}
                borderRight="1px" borderColor="gray.400">
                <Box
                    bg="grey.100" px={2} py={1}
                    borderY="1px"
                    borderColor="gray.400"
                    style={{borderCollapse: "collapse"}}
                    w="100%"
                >
                    <Text>{index + 1}.</Text>
                </Box>

                <Box
                    bg="grey.100" px={2} py={1}
                    borderY="1px"
                    borderColor="gray.400"
                    style={{borderCollapse: "collapse"}}
                    w="100%"
                >
                    <Text>{photo.title}</Text>
                </Box>

                <Box
                    bg="grey.100" px={2} py={1}
                    borderY="1px"
                    borderColor="gray.400"
                    style={{borderCollapse: "collapse"}}
                    w="100%"
                >
                    <Text>{photo.width_z}x{photo.height_z}</Text>
                </Box>

                <Box
                    bg="grey.100" px={2} py={1}
                    borderY="1px"
                    borderColor="gray.400"
                    style={{borderCollapse: "collapse"}}
                    w="100%"
                >
                    <Text>{photo.latitude}, {photo.longitude}</Text>
                </Box>

                <Box
                    bg="grey.100" px={2} py={1}
                    borderY="1px"
                    borderColor="gray.400"
                    style={{borderCollapse: "collapse"}}
                    w="100%"
                >
                    <Text>{photo.datetaken}</Text>
                </Box>
            </VStack>

            <Image w="80%" src={photo.url_z} alt={photo.title} />
        </HStack>
    );
}
 
export default ResultImage;