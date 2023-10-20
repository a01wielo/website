import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

const VimTextComponent = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const originalText = `This is an example text in Vim style`;
        let currentIndex = 0;

        const interval = setInterval(() => {
            setText((prevText) => prevText + originalText[currentIndex]);
            currentIndex += 1;

            if (currentIndex === originalText.length - 1) {
                clearInterval(interval);
                setShowCursor(false);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box bg="black" color="green" p={4} borderRadius="md" fontFamily="monospace">
            <Text>{text}</Text>
            {showCursor && <span>_</span>}
        </Box>
    );
};

export default VimTextComponent;
