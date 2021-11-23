import { Heading, Input } from "@chakra-ui/react";
import WeightSlider from "./WeightSlider";

const Title = () => {
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Title</Heading>
            <Input placeholder="Title" />
            <WeightSlider />
        </>
    );
}
 
export default Title;