import {
    ChakraProvider,
    Button,
    useDisclosure,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider>
            <Flex minH="100vh" justifyContent="center" alignItems="center">
                <Button onClick={onOpen}>Open</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>What's Up!(여기는 모델 헤더 )</ModalHeader>

                        <ModalCloseButton />

                        <ModalBody pb={100}>
                            안녕하세요 (여기는 모델바디입니다!)
                        </ModalBody>
                        <ModalFooter>
                            <Button mr={4} onClick={onClose}>
                                닫기
                            </Button>
                            designed by, 최주연
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </ChakraProvider>
    );
}

export default App;
