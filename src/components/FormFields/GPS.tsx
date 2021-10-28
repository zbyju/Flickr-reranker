import { Button, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { GPSLocation } from "../../types/map";
import GPSModalContent from "./GPSModalContent";
import WeightSlider from "./WeightSlider";

const GPS = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const defaultLocation = {
        lat: 50.10507433351475,
        lng: 14.38970665800668
    }
    const [location, setLocation] = useState<GPSLocation | null>(null);
    const tmpLocation = useState<GPSLocation>(defaultLocation);
    const saveClicked = () => {
        setLocation(tmpLocation[0])
        onClose()
    }
    return (
        <>
            <HStack w="100%" alignItems="center" justify="space-between">
                <Heading size="sm" alignSelf="flex-start">GPS</Heading>
                <Button size="xs" colorScheme="green" onClick={onOpen}>Open map</Button>
            </HStack>
            <Input placeholder="GPS latitude" value={location?.lat} />
            <Input placeholder="GPS longitude" value={location?.lng} />
            <WeightSlider />



            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Pick location</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <GPSModalContent locationState={tmpLocation} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="green" mr={3} onClick={saveClicked}>Apply</Button>
                    <Button colorScheme="red" onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
 
export default GPS;