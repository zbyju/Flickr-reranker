import { Heading } from "@chakra-ui/react";
import WeightSlider from "./WeightSlider";
import DatePicker from "react-date-picker";
import { useState } from "react";
import moment from 'moment'

const Date = () => {
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    return (
        <>
            <Heading size="sm" alignSelf="flex-start">Date</Heading>
            <DatePicker
                onChange={(val:any) => {val ? setStartDate(moment(val)) : setStartDate(null)}}
                value={startDate ? startDate.toDate() : null}
                format="dd.MM.y"
            />
            <WeightSlider />
        </>
    );
}
 
export default Date;