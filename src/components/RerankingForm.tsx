import { Button, Divider, Heading, Input } from "@chakra-ui/react";
import Author from "./FormFields/Author";
import GPS from "./FormFields/GPS";
import ImageResolution from "./FormFields/ImageResolution";
import Date from "./FormFields/Date";

const RerankingForm = () => {
    return (
        <>
            <Heading size="lg">Reranking form:</Heading>

            <Author />
            <ImageResolution />
            <Date />
            <GPS />


            <Button>Apply</Button>
        </>
    );
}

export default RerankingForm;