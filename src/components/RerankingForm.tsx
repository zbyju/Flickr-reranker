import { Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultDateTakenField, getDefaultGPSField, getDefaultResolutionField, getDefaultTitleField } from "../factory/formFactory";
import { updateRerankForm } from "../redux/actions/rerankFormActions";
import { RootState } from "../redux/reducers";
import { DateTakenField, GPSField, ResolutionField, TitleField } from "../types/fields";
import Date from "./FormFields/Date";
import GPS from "./FormFields/GPS";
import Resolution from "./FormFields/Resolution";
import Title from "./FormFields/Title";

const RerankingForm = () => {
    const dispatch = useDispatch()
    const rerankForm = useSelector((state: RootState) => state.rerankForm.rerankForm)
    const [titleField, setTitleField] = useState<TitleField>(getDefaultTitleField())
    const [resolutionField, setResolutionField] = useState<ResolutionField>(getDefaultResolutionField())
    const [dateTakenField, setDateTakenField] = useState<DateTakenField>(getDefaultDateTakenField())
    const [gpsField, setGpsField] = useState<GPSField>(getDefaultGPSField())

    const isFormChanged = () => {
        return (
            titleField.data !== rerankForm.titleField.data ||
            titleField.weight !== rerankForm.titleField.weight ||
            resolutionField.data !== rerankForm.resolutionField.data ||
            resolutionField.weight !== rerankForm.resolutionField.weight ||
            dateTakenField.data !== rerankForm.dateTakenField.data ||
            dateTakenField.weight !== rerankForm.dateTakenField.weight ||
            gpsField.data !== rerankForm.gpsField.data ||
            gpsField.weight !== rerankForm.gpsField.weight
        )
    }

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


            <Button isDisabled={!isFormChanged()} colorScheme="blue" onClick={applyClicked}>Apply</Button>
        </>
    );
}

export default RerankingForm;
