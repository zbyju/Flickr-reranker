import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";
import { RawPhoto } from "../types/photo";

interface ResultImageProps {
    photo: RawPhoto,
    index: number
}

const ResultImage = ({photo, index}: ResultImageProps) => {
    return (
        <HStack
            bg="grey.100"
            borderY="1px"
            boxShadow="lg"
            borderColor="gray.400"
            style={{borderCollapse: "collapse"}}
            justifyContent="space-between"
            spacing={0}
            w="100%"
        >
            <VStack w="190px" minW="190px" h="100%" justify="flex-start" spacing={0}
                borderRight="1px" borderColor="gray.400"
                bg="blue.50">
                <Box
                    px={2} py={1}
                    w="100%"
                    borderBottom="1px"
                    borderColor="blue.100"
                    style={{borderCollapse: "collapse"}}
                    _hover={{
                        background: "rgb(225, 238, 250)"
                    }}
                    transition="0.3s all"
                >
                    <Text>{index + 1}.</Text>
                </Box>

                <Box
                    px={2} py={1}
                    w="100%"
                    borderBottom="1px"
                    borderColor="blue.100"
                    style={{borderCollapse: "collapse"}}
                    _hover={{
                        background: "rgb(225, 238, 250)"
                    }}
                    transition="0.3s all"
                >
                    <Text>{photo.title}</Text>
                </Box>

                <Box
                    px={2} py={1}
                    w="100%"
                    borderBottom="1px"
                    borderColor="blue.100"
                    style={{borderCollapse: "collapse"}}
                    _hover={{
                        background: "rgb(225, 238, 250)"
                    }}
                    transition="0.3s all"
                >
                    <Text>{photo.width_z}x{photo.height_z}</Text>
                </Box>

                <Box
                    px={2} py={1}
                    w="100%"
                    borderBottom="1px"
                    borderColor="blue.100"
                    style={{borderCollapse: "collapse"}}
                    _hover={{
                        background: "rgb(225, 238, 250)"
                    }}
                    transition="0.3s all"
                >
                    <Text>{photo.latitude}, {photo.longitude}</Text>
                </Box>

                <Box
                    px={2} py={1}
                    w="100%"
                    borderBottom="1px"
                    borderColor="blue.100"
                    style={{borderCollapse: "collapse"}}
                    _hover={{
                        background: "rgb(225, 238, 250)"
                    }}
                    transition="0.3s all"
                >
                    <Text>{photo.datetaken}</Text>
                </Box>
            </VStack>

            <Box flexGrow={1}>
                <Image src={photo.url_z} alt={photo.title} />
            </Box>
        </HStack>
    );
}
 
export default ResultImage;