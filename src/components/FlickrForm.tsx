import { Button, Heading, HStack, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSearch from "../api/fetch";
import { updatePhotos } from "../redux/actions/photoActions";
import { updateSearch } from "../redux/actions/searchFormActions";
import { RootState } from "../redux/reducers";
import { RawPhoto } from "../types/photo";

const FlickrForm = () => {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state: RootState) => state.searchForm)

    const dispatchPhotos = (photos: Array<RawPhoto>) => dispatch(updatePhotos(photos))

    const searchClicked = async () => {
        dispatchPhotos([])
        try {
            const ret = await fetchSearch(searchTerm)
            dispatchPhotos(ret.photos.photo)
        } catch (err) { console.log(err) }
    }
    const dispatchSearchTerm: any = (event: ChangeEvent<HTMLInputElement>) => dispatch(updateSearch(event.target.value))

    return (
        <>
            <Heading size="lg">Flickr Search:</Heading>
            <HStack>
                <Input
                    placeholder="Search on flickr..."
                    onChange={dispatchSearchTerm}
                />
                <Button colorScheme="blue"
                    onClick={searchClicked}>Search</Button>
            </HStack>
        </>
    );
}

export default FlickrForm;
