import { Text, Box } from "@chakra-ui/react";

interface ImageDescProps {
    title: string
    label: string
}

const ImageDesc = ({title, label}: ImageDescProps) => {
    return (
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
            <Text><b>{title}: </b>{label}</Text>
        </Box>
    );
}
 
export default ImageDesc;