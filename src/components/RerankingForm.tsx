import { Button, Heading } from "@chakra-ui/react";
import Title from "./FormFields/Title";
import GPS from "./FormFields/GPS";
import ImageResolution from "./FormFields/ImageResolution";
import Date from "./FormFields/Date";

interface RerankingFormProps {
}

const RerankingForm = ({}: RerankingFormProps) => {
    return (
        <>
            <Heading size="lg">Reranking form:</Heading>

            <Title />
            <ImageResolution />
            <Date />
            <GPS />


            <Button colorScheme="blue">Apply</Button>
        </>
    );
}

export default RerankingForm;