import { Heading, Input } from "@chakra-ui/react";
import { TitleField } from "../../types/fields";
import WeightSlider from "./WeightSlider";

interface TitleProps {
    value: TitleField
    setValue: any
}

const Title = ({ value, setValue }: TitleProps) => {
    const setTitle = (event: any) => {
        setValue({ ...value, data: event.target.value })
    }
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Title</Heading>
            <Input
                placeholder="Title"
                value={value.data ? value.data : ""}
                onChange={setTitle}
            />
            <WeightSlider value={value} setValue={setValue} />
        </>
    );
}

export default Title;
