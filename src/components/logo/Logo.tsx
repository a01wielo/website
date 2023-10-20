import React from "react";
import { Image, Box } from "@chakra-ui/react";

export default function Logo() {
    return (
        <>
            <Box
                w="200px"
                h="200px"
                borderRadius="full"
                border="2px solid #ccc"
                p="0px"
                bgColor="white"
                boxShadow="base"
                overflow="hidden" // Add this line to clip the image within the rounded box
            >
                <Image
                    src="/public/foto.jpg"
                    alt="Logo"
                    w="100%"
                    h="100%"
                    objectFit="cover" // Ensures the image covers the entire box without stretching
                />
            </Box>

        </>
    )
}