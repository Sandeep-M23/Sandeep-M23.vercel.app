import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useColorModeValue
} from "@chakra-ui/react";

const SimpleModal = ({isOpen,onClose,message,title}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="lg"
      >
        <ModalOverlay />
        <ModalContent bg={useColorModeValue('#f4f1ee','#272727')}>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{message}</ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={onClose}
              variant="solid"
              bg="red.500"
              color="white"
              _focus={{ outline: "none" }}
              _hover={{
                bg: "red.700",
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SimpleModal;