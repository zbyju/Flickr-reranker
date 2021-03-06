import { ChakraProvider, HStack, SimpleGrid } from "@chakra-ui/react";
import './App.css';
import ResultList from './components/ResultList';
import ResultListReranked from './components/ResultListReranked';
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HStack minH="100vh" height="100%" w="100%" minW="100vw" h="1" spacing={0} overflow-x="hidden">
          <SearchForm />
          <SimpleGrid columns={2} w="100%" h="100%" overflow-x="hidden">
            <ResultList />
            <ResultListReranked />
          </SimpleGrid>
        </HStack>
      </ChakraProvider>
    </div>
  );
}

export default App;
