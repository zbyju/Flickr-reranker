import { Heading, Input } from "@chakra-ui/react";
import WeightSlider from "./WeightSlider";

const Author = () => {
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Author</Heading>
            <Input placeholder="Author's name" />
            <WeightSlider />
        </>
    );
}
 
export default Author;