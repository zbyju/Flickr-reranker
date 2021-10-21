import { VStack } from "@chakra-ui/react";
import FlickerForm from "./FlickerForm";
import RerankingForm from "./RerankingForm";

const SearchForm = () => {
    return (
        <>
            <VStack border="1px"
                    boxShadow="lg"
                    borderColor="gray.400"
                    borderRadius="lg"
                    p="4" h="100%"
                    minW="300px">
                <FlickerForm />
                <RerankingForm />
            </VStack>
        </>
    );
}
 
export default SearchForm;