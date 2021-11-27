import { Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { FormField } from "../../types/fields";

interface WeightSliderProps {
    value: FormField<any>,
    setValue: any
}

const WeightSlider = ({ value, setValue }: WeightSliderProps) => {
    const onSliderChange = (val: number) => {
        setValue({
            ...value,
            weight: val
        })
    }

    return (
        <>
            <Slider aria-label="slider-ex-1"
                defaultValue={value.weight}
                min={0} max={100}
                onChange={onSliderChange}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                    <Text fontSize="xs" fontWeight="300">{value.weight}</Text>
                </SliderThumb>
            </Slider>
        </>
    );
}

export default WeightSlider;
