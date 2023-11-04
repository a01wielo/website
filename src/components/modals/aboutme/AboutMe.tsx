
import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Flex, ChakraProvider, Image, Button, Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Spacer, Icon } from '@chakra-ui/react';
import TypeWriter from 'typewriter-effect'
import img1 from '/public/climbing_cropped.jpg'

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

const AboutMe = () => {
    return (
        <ModalContent bg="white" color="black">
            <ModalHeader fontSize="2xl">
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Über mich.')
                            .pauseFor(1000)
                            .deleteChars(5)
                            // .deleteAll()
                            .pauseFor(500)
                            .pasteString(' 👨‍👩‍👧‍👦', null)
                            .pauseFor(1000)
                            // .deleteAll()
                            .deleteChars(2)
                            .pauseFor(500)
                            .pasteString(' ⛰️', null)
                            .pauseFor(1000)
                            // .deleteAll()
                            .deleteChars(1)
                            .pauseFor(500)
                            .typeString(' Tech.')
                            .pause()
                            .start();
                    }}
                />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex p="5px" alignItems="center">
                    <Box w="60%">
                        <Text fontSize="xl" textAlign="justify">
                            Hallo! Ich heiße Arthur Kajetan Wielomski.
                            Die Zukunt der Mobilität liegt mir besonders am Herzen, darum arbeite ich bei <a style={{ 'color': '#5daedb' }} target="_blank" rel="noreferrer" href='https://iav.de'>IAV</a>.
                            <br></br>
                            <br></br>
                            Ein besonderes Augenmerk habe ich für die <a style={{ 'color': '#5daedb' }} target="_blank" rel="noreferrer" href="https://www.iav.com/news/erzgebirge-e-shuttle-nur-einen-swipe-entfernt/">Mobilität im ländlichen Raum. </a>
                            Ich bin überzeugt, dass der ländliche Raum nur über die Entwicklung
                            einer offenen Mobilitätsplattform weiterhin attraktiv bleiben kann.
                            <br></br>
                            <br></br>
                            Außerdem bin ich großer Fan von <a style={{ 'color': '#5daedb' }} target="_blank" rel="noreferrer" href="https://directus.io">Directus</a> <DirectusIcon /> als NoCode-Plattform.
                        </Text>
                    </Box>
                    <Spacer />
                    <Box w="30%">
                        <Image src={img1} alt="Image" maxH="80" />
                    </Box>
                </Flex>
            </ModalBody>
            <ModalFooter>
                {/* <Button colorScheme="blue" mr={3} onClick={handleClose}> */}
                {/* Close */}
                {/* </Button> */}
            </ModalFooter>
        </ModalContent>
    )
}

export default AboutMe;