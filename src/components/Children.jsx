import { Box, Heading } from '@chakra-ui/react';
import React from 'react';


const Children = ({header, text }) => {
  return (
    <Box width={'50%'} border={'1px solid green'} >
      <h1>{header}</h1>
      <p>{text}</p>
    </Box>
  )
}

export default Children;