import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Flex, ChakraProvider, Image, Button, IconButton, Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Spacer, Icon } from '@chakra-ui/react';
import TypeWriter from 'typewriter-effect';
import img from '/public/foto.jpg';
import img1 from '/public/climbing_cropped.jpg';
import de from '/public/de.png';
import uk from '/public/uk.png';
import pl from '/public/pl.png';
import az from '/public/az.png';
import uae from '/public/uae.png'
import ru from '/public/ru.png';
import ukr from '/public/ukr.png';
import AboutMe from './components/modals/aboutme/AboutMe';
import Impressum from './components/modals/impressum';

const Logo = () => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLogo(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Box
            position="fixed"
            bottom="2rem"
            right="2rem"
            w="180px"
            h="150px"
            borderRadius="full"
            border="2px solid #ccc"
            p="0px"
            bgColor="white"
            boxShadow="base"
            overflow="hidden" // Add this line to clip the image within the rounded box
        >
            <Image
                src={img}
                alt="Logo"
                objectFit="cover" // Ensures the image covers the entire box without stretching
            />
        </Box>

    );
};

const TypeWriterBox = () => {

    const [typewriterDone, setTypewriterDone] = useState(true);
    const [typeString, setTypeString] = useState('');

    return (
        <>
            <Box
                bg="white"
                color="dark"
                p={4}
                borderRadius="md"
                mt="1%"
                ml="1%"
                fontSize="4xl"
            >
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter.pauseFor(2000)
                            .typeString('Hallo ')
                            .pasteString('🇩🇪', null)
                            .pauseFor(1100)
                            .deleteAll()
                            .typeString('Hello ')
                            .pasteString('🇬🇧', null)
                            .pauseFor(1100)
                            .deleteAll()
                            .typeString('Cześć ')
                            .pasteString('🇵🇱', null)
                            .pauseFor(1100)
                            .deleteAll()
                            .typeString('Salam ')
                            .pasteString('🇦🇿', null)
                            .pauseFor(1100)
                            .deleteAll()
                            .typeString('Привіт ')
                            .pasteString('🇺🇦', null)
                            .typeString('<br/> Привет ')
                            .pasteString('🇷🇺', null)
                            .pauseFor(1100)
                            .deleteAll()
                            .typeString('السلام عليكم ')
                            .pasteString('🇵🇸', null)
                            .pauseFor(1100)
                            .deleteAll()
                            .pauseFor(400)
                            .callFunction(() => {
                                setTypewriterDone(true);
                            })
                            .typeString(typeString)
                            .start();
                    }}
                />
            </Box>
            {typewriterDone && <ControlButtons />}
        </>
    );
};

const ControlButtons = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isImpressumOpen, setIsImpressumOpen] = useState(false);
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    const buttonStyle = {
        flex: '1',
        maxWidth: '150px',
    };

    const buttonTextStyle = {
        fontSize: '4xl',
        position: 'relative', // Add position relative to allow absolute positioning of the pseudo-element
    };

    const greenLine = {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '2px',
        backgroundColor: 'green',
        visibility: 'hidden',
        transformOrigin: 'bottom right',
        transform: 'scaleX(0)', // Start with a scale of 0 (hidden)
        transition: 'transform 0.3s ease', // Add a transition effect
    };

    const handleMouseOver = (e) => {
        e.currentTarget.querySelector('.green-line').style.visibility = 'visible';
        e.currentTarget.querySelector('.green-line').style.transform = 'scaleX(1)';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.querySelector('.green-line').style.visibility = 'hidden';
        e.currentTarget.querySelector('.green-line').style.transform = 'scaleX(0)';
    };

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleImpressumClick = () => {
        setIsImpressumOpen(true);
    }

    const handleProjectClick = () => {
        setIsProjectOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
        setIsImpressumOpen(false);
        setIsProjectOpen(false);
    };

    const DirectusIcon = () => {
        return (
            <Icon viewBox='-1 0 24 24'>
                <path
                    fill='currentColor'
                    d='M18.187 13.909a1.74 1.74 0 0 1-.286-.092.657.657 0 0 1-.203-.139c.056-.488 0-.912.047-1.392.184-1.862 1.355-1.272 2.406-1.577.655-.184 1.31-.562 1.475-1.336a13.528 13.528 0 0 0-2.397-2.204c-2.85-2.028-6.574-2.84-9.958-2.277a5.113 5.113 0 0 0 2.238 2.074s-.917 0-1.703-.587c-.23.092-.692.274-.913.384a5.094 5.094 0 0 0 6.63.37c-.01.017-.185.285-.397 1.4-.47 2.38-1.826 2.195-3.504 1.596-3.485-1.264-5.403-.093-7.145-2.49-.507.286-.82.82-.82 1.402 0 .599.331 1.106.81 1.383.262-.348.38-.446.836-.446-.706.4-.79.75-1.094 1.718-.368 1.171-.212 2.37-1.936 2.683-.913.046-.894.664-1.226 1.586-.415 1.199-.968 1.678-2.047 2.812.443.535.904.6 1.374.406.968-.406 1.715-1.66 2.415-2.471.784-.904 2.665-.517 4.085-1.402.977-.599 1.457-1.41.811-2.784a2.72 2.72 0 0 1 .701 1.66c1.641-.213 3.836 1.788 5.836 2.12a3.574 3.574 0 0 1-.488-.82c-.23-.554-.304-1.06-.258-1.503.184 1.097 1.29 2.507 3.07 2.637.452.036.95-.019 1.466-.176.618-.184 1.19-.424 1.872-.295.507.093.977.35 1.272.784.443.645 1.41.784 1.844-.009-.977-2.554-3.67-2.72-4.813-3.015z'
                />
            </Icon>
        )
    }

    return (
        <>
            <Flex
                justify="center"
                position="fixed"
                bottom="2rem"
                left="50%"
                transform="translateX(-50%)"
                bg="white"
                p="40px"
                borderRadius="full"
            >
                <Button
                    bg="white"
                    variant="solid"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleButtonClick}
                    style={buttonStyle}
                    mx="5" // Add space between buttons
                >
                    <span style={buttonTextStyle}>
                        Über mich
                        <span className="green-line" style={greenLine}></span>
                    </span>
                </Button>
                <Button
                    bg="white"
                    variant="solid"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleProjectClick}
                    style={buttonStyle}
                    mx="5" // Add space between buttons
                >
                    <span style={buttonTextStyle}>
                        Projekte
                        <span className="green-line" style={greenLine}></span>
                    </span>
                </Button>
                <Button
                    bg="white"
                    variant="solid"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleImpressumClick}
                    style={buttonStyle}
                    mx="5" // Add space between buttons
                >
                    <span style={buttonTextStyle}>
                        Impressum
                        <span className="green-line" style={greenLine}></span>
                    </span>
                </Button>
                <Modal isOpen={isOpen} onClose={handleClose} size="6xl" isCentered={true}>
                    <ModalOverlay />
                    <AboutMe></AboutMe>
                </Modal>
                <Modal isOpen={isImpressumOpen} onClose={handleClose} size="6xl" isCentered={false} scrollBehavior='inside'>
                    <ModalOverlay />
                    <Impressum></Impressum>
                </Modal>
                <Modal isOpen={isProjectOpen} onClose={handleClose} size="6xl" isCentered={true}>
                    <ModalOverlay />
                    <AboutMe></AboutMe>
                </Modal>
            </Flex>
            <Flex
                justify="center"
                position="absolute"
                bottom="10px"
                gap={3}
            >
                <IconButton size='sm' backgroundImage={de} backgroundSize='cover' isRound={true} _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
                }}
                ></IconButton>
                <IconButton size='sm' backgroundImage={uk} backgroundSize='cover' backgroundPosition='center' isRound={true} _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
                }} >

                </IconButton>
                <IconButton size='sm' backgroundImage={pl} backgroundSize='cover' isRound={true} _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
                }} >

                </IconButton>
                <IconButton size='sm' backgroundImage={uae} backgroundSize='cover' isRound={true} _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
                }}>
                </IconButton>
                <IconButton size='sm' backgroundImage={az} backgroundSize='cover' backgroundPosition='center' isRound={true} _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'
                }} >
                </IconButton>
                <IconButton size='sm' backgroundImage={ukr} backgroundSize='cover' isRound={true} _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'
                }}>
                </IconButton>
                <IconButton size='sm' backgroundImage={ru} backgroundSize='cover' isRound={true} _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'
                }}>
                </IconButton>








            </Flex >
        </>
    );
};



const Website = () => {
    return (
        <ChakraProvider>
            <Flex
                minHeight="100vh"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <TypeWriterBox />
                <Logo />
            </Flex>
        </ChakraProvider>
    );
};

export default Website;
