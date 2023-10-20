import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from '../logo'
import VimTextComponent from "../VimTextComponent";

export default function Content() {
    return (
        <>
            <Flex bg='red' m={20} justify="center" align="center">
                <Box>Test</Box>
            </Flex>

            <Flex bg='green' m={20} mr={100} justify="right" align="center">
                <Logo></Logo>
                <VimTextComponent></VimTextComponent>
            </Flex>
        </>
    )
}