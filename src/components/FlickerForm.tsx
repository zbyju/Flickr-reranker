import { Button, Heading, HStack, Input } from "@chakra-ui/react";

const FlickerForm = () => {
    return (
        <>
            <Heading size="lg">Flickr Search:</Heading>
            <HStack>
                <Input placeholder="Search on flickr..." />
                <Button>Search</Button>
            </HStack>
        </>
    );
}
 
export default FlickerForm;