import { Heading } from "@chakra-ui/react";
import moment from 'moment';
import DatePicker from "react-date-picker";
import { DateTakenField } from "../../types/fields";
import WeightSlider from "./WeightSlider";

interface DateTakenProps {
    value: DateTakenField,
    setValue: any
}

const Date = ({ value, setValue }: DateTakenProps) => {
    const setDate = (date: Date) => {
        const dateToSave = date ? moment(date) : null
        setValue({ ...value, data: dateToSave })
    }
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Date</Heading>
            <DatePicker
                onChange={setDate}
                value={value.data ? value.data.toDate() : null}
                format="dd.MM.y"
            />
            <WeightSlider value={value} setValue={setValue} />
        </>
    );
}

export default Date;
