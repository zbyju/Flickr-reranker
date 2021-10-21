import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { useState } from "react";

const WeightSlider = () => {
    const [weight, setWeight] = useState(100);

    return (
        <>
            <Slider aria-label="slider-ex-1"
                    defaultValue={weight}
                    min={0} max={100}
                    onChange={(val) => setWeight(val)}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                    <Text fontSize="xs" fontWeight="300">{weight}</Text>
                </SliderThumb>
            </Slider>
        </>
    );
}
 
export default WeightSlider;