import { Button, Heading, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import fetchSearch from "../api/fetch";

const FlickerForm = (props: any) => {
    const [photos, setPhotos] = props.photosState
    const [query, setQuery] = useState("");

    const searchClicked = async () => {
        try {
            const ret = await fetchSearch(query)
            await setPhotos(ret.photos.photo)
            console.log(photos)
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