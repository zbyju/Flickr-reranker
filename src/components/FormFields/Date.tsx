import { Heading, Input } from "@chakra-ui/react";
import WeightSlider from "./WeightSlider";

const Date = () => {
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Date</Heading>
            <Input placeholder="Taken on (date)" />
            <WeightSlider />
        </>
    );
}
 
export default Date;