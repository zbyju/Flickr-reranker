import React from 'react';
import './App.css';
import { ChakraProvider, HStack } from "@chakra-ui/react"

import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HStack minH="100vh" minW="100vw" h="1">
          <SearchForm />
          <ResultList />
        </HStack>
      </ChakraProvider>
    </div>
  );
}

export default App;
