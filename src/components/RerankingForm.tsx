import { Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDefaultDateTakenField, getDefaultGPSField, getDefaultResolutionField, getDefaultTitleField } from "../factory/formFactory";
import { updateRerankForm } from "../redux/actions/rerankFormActions";
import { DateTakenField, GPSField, ResolutionField, TitleField } from "../types/fields";
import Date from "./FormFields/Date";
import GPS from "./FormFields/GPS";
import Resolution from "./FormFields/Resolution";
import Title from "./FormFields/Title";

const RerankingForm = () => {
    const dispatch = useDispatch()
    const [titleField, setTitleField] = useState<TitleField>(getDefaultTitleField())
    const [resolutionField, setResolutionField] = useState<ResolutionField>(getDefaultResolutionField())
    const [dateTakenField, setDateTakenField] = useState<DateTakenField>(getDefaultDateTakenField())
    const [gpsField, setGpsField] = useState<GPSField>(getDefaultGPSField())


    const applyClicked = () => {
        dispatch(updateRerankForm({
            titleField,
            resolutionField,
            dateTakenField,
            gpsField
        }))
    }

    return (
        <>
            <Heading size="lg">Reranking form:</Heading>

            <Title value={titleField} setValue={setTitleField} />
            <Resolution value={resolutionField} setValue={setResolutionField} />
            <Date value={dateTakenField} setValue={setDateTakenField} />
            <GPS value={gpsField} setValue={setGpsField} />


            <Button colorScheme="blue" onClick={applyClicked}>Apply</Button>
        </>
    );
}

export default RerankingForm;
