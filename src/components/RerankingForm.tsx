import { Button, Heading, Input } from "@chakra-ui/react";

const RerankingForm = () => {
    return (
        <>
            <Heading size="lg">Reranking form:</Heading>

            <Input placeholder="Author name" />
            <Input placeholder="Image width" />
            <Input placeholder="Image height" />
            <Input placeholder="Taken on (date)" />
            <Input placeholder="GPS x" />
            <Input placeholder="GPS y" />


            <Button>Apply</Button>
        </>
    );
}

export default RerankingForm;