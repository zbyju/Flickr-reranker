import React from 'react';
import './App.css';
import { ChakraProvider, Divider, HStack, SimpleGrid } from "@chakra-ui/react"

import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import ResultListReranked from './components/ResultListReranked';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HStack minH="100vh" height="100%" minW="100vw" h="1" spacing={0}>
          <SearchForm />
          <SimpleGrid columns={2} spacing={1} w="100%" h="100%">
            <ResultList />
            <ResultListReranked />
          </SimpleGrid>
        </HStack>
      </ChakraProvider>
    </div>
  );
}

export default App;
