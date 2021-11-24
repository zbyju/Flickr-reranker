import { VStack } from "@chakra-ui/react";
import FlickrForm from "./FlickrForm";
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
                <FlickrForm />
                <RerankingForm />
            </VStack>
        </>
    );
}
 
export default SearchForm;