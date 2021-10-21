import { Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper} from "@chakra-ui/react";
import WeightSlider from "./WeightSlider";

const ImageResolution = () => {
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Resolution</Heading>
            <NumberInput w="100%" step={10} min={0} max={20000}>
                <NumberInputField placeholder="Image width"/>
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <NumberInput w="100%" step={10} min={0} max={20000}>
                <NumberInputField placeholder="Image height"/>
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <WeightSlider />
        </>
    );
}
 
export default ImageResolution;