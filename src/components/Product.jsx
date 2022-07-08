import React from 'react'
import Sectionprop from './Sectionprop'
import {Link as ChakraLink} from '@chakra-ui/react'

const Product = () => {
  return (
    <div >
      <Sectionprop 
      // className = {'product'}
      header = {' Stay productive, wherever you are '}
      text = { 'Never let location be an issue when accessing your files. Fylo has you covered for all your storage needs.' }
      width = {'50%'}
      border= {'1px solid green'}
      />
      <Sectionprop 
      // className = {'product'}
      margin={'20px'}
      text = { 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attaachments required!      ' }
      width = {'50%'}
      border= {'1px solid blue'}
      />
      <div>
        <ChakraLink _hover={{textDecoration : 'none',}} color={'red'} href='#'> See how Fylo works </ChakraLink>
      </div>
      <Sectionprop 
      header = {' " '}
      text = { 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' }
      width = {'25%'}
      border= {'1px solid green'}
      />
    </div>
    
  )
}

export default Product