import { Button, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { getDefaultMapPosition } from "../../factory/formFactory";
import { GPSField, GPSLocation } from "../../types/fields";
import GPSModalContent from "./GPSModalContent";
import WeightSlider from "./WeightSlider";

interface GPSProps {
    value: GPSField
    setValue: any
}

const GPS = ({ value, setValue }: GPSProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const tmpLocation = useState<GPSLocation>(getDefaultMapPosition());
    const setLatitude = (event: any) => {
        const newData = { ...value.data, lat: event.target.value }
        setValue({ ...value, data: newData })
    }
    const setLongitude = (event: any) => {
        const newData = { ...value.data, lng: event.target.value }
        setValue({ ...value, data: newData })
    }
    const saveClicked = () => {
        setValue({ ...value, data: tmpLocation[0] })
        onClose()
    }
    return (
        <>
            <HStack w="100%" alignItems="center" justify="space-between">
                <Heading size="sm" alignSelf="flex-start">GPS</Heading>
                <Button size="xs" colorScheme="green" onClick={onOpen}>Open map</Button>
            </HStack>
            <Input placeholder="GPS latitude" value={value.data ? value.data.lat : ""}
                onChange={setLatitude}
            />
            <Input placeholder="GPS longitude" value={value.data ? value.data.lng : ""}
                onChange={setLongitude}
            />
            <WeightSlider value={value} setValue={setValue} />



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
