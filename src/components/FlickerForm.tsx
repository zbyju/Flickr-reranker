import { Button, Heading, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import fetchSearch from "../api/fetch";

interface FlickerFormProps {
}

const FlickerForm = ({}: FlickerFormProps) => {
    const [query, setQuery] = useState("");

    const searchClicked = async () => {
        try {
            const ret = await fetchSearch(query)
        } catch(err) { console.log(err) }
    }

    return (
        <>
            <Heading size="lg">Flickr Search:</Heading>
            <HStack>
                <Input
                    placeholder="Search on flickr..."
                    onChange={(event) => setQuery(event.target.value)}
                />
                <Button colorScheme="blue"
                onClick={searchClicked}>Search</Button>
            </HStack>
        </>
    );
}
 
export default FlickerForm;