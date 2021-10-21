import { Heading, Input } from "@chakra-ui/react";
import WeightSlider from "./WeightSlider";

const GPS = () => {
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">GPS</Heading>
            <Input placeholder="GPS x" />
            <Input placeholder="GPS y" />
            <WeightSlider />
        </>
    );
}
 
export default GPS;