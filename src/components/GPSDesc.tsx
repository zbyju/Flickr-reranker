import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { GPSLocation } from "../types/fields";
import GPSModalContent from "./formFields/GPSModalContent";

interface GPSDescProps {
  gps: GPSLocation
}

const GPSDesc = ({ gps }: GPSDescProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const tmpLocation = useState(gps)
  return (
    <>
      <Box
        px={2} py={1}
        w="100%"
        borderBottom="1px"
        borderColor="blue.100"
        style={{ borderCollapse: "collapse" }}
        _hover={{
          background: "rgb(225, 238, 250)"
        }}
        transition="0.3s all"
      >
        <VStack>
          <Text>
            <b>GPS</b>
            <b>: </b>
            <span>{gps.lat}, {gps.lng}</span>
          </Text >
          <Button size="xs" alignSelf="center" colorScheme="green" onClick={onOpen}>Show on map</Button>
        </VStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pick location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GPSModalContent locationState={tmpLocation} locationChangable={false} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GPSDesc;
