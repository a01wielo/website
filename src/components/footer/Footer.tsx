import React from 'react';
import { Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      w="100%"
      h="80px" // Set your desired height here
      position="fixed"
      bottom="0"
      bg="gray.100" // Set your desired background color
    >
      Your footer content goes here
    </Flex>
  );
};

export default Footer;