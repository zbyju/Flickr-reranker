import { Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { ResolutionField } from "../../types/fields";
import WeightSlider from "./WeightSlider";

interface ResolutionProps {
    value: ResolutionField
    setValue: any
}

const Resolution = ({ value, setValue }: ResolutionProps) => {
    const setWidth = (valString: string, valNumber: number) => {
        const newData = { ...value.data, width: valNumber }
        setValue({ ...value, data: newData })
    }
    const setHeight = (valString: string, valNumber: number) => {
        const newData = { ...value.data, height: valNumber }
        setValue({ ...value, data: newData })
    }
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Resolution</Heading>
            <NumberInput w="100%" step={10} min={0} max={20000}
                value={value.data?.width ? value.data.width : undefined}
                onChange={setWidth}
            >
                <NumberInputField placeholder="Image width" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <NumberInput w="100%" step={10} min={0} max={20000}
                value={value.data?.height ? value.data.height : undefined}
                onChange={setHeight}
            >
                <NumberInputField placeholder="Image height" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <WeightSlider value={value} setValue={setValue} />
        </>
    );
}

export default Resolution;
