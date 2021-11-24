import { VStack } from "@chakra-ui/react";
import FlickerForm from "./FlickerForm";
import RerankingForm from "./RerankingForm";

interface SearchFormProps {
}

const SearchForm = ({}: SearchFormProps) => {
    return (
        <>
            <VStack border="1px"
                    boxShadow="lg"
                    borderColor="gray.400"
                    borderRadius="0 25px 25px 0"
                    p="4" h="100%"
                    minW="300px">
                <FlickerForm />
                <RerankingForm />
            </VStack>
        </>
    );
}
 
export default SearchForm;