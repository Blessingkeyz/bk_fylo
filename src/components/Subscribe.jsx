import React from 'react'
import Sectionprop from './Sectionprop'
import {Box} from '@chakra-ui/react'
const Subscribe = () => {
  return (
    <Box bgColor={'purple.300'} >
      <Sectionprop 
      // className = {'product'}
      margin={'20px'}
      text = { 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attaachments required!      ' }
      width = {'50%'}
      border= {'1px solid blue'}
      />
    </Box>
  )
}

export default Subscribe