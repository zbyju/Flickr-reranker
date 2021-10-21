import { Button, Heading, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import fetchSearch from "../api/fetch";
import { RawPhoto } from "../types/photo";

interface FlickerFormProps {
    photosState: [RawPhoto[], React.Dispatch<React.SetStateAction<RawPhoto[]>>]
}

const FlickerForm = ({photosState}: FlickerFormProps) => {
    const [photos, setPhotos] = photosState
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