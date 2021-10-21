import { Heading, Input } from "@chakra-ui/react";
import WeightSlider from "./WeightSlider";

const ImageResolution = () => {
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Resolution</Heading>
            <Input placeholder="Image width" />
            <Input placeholder="Image height" />
            <WeightSlider />
        </>
    );
}
 
export default ImageResolution;