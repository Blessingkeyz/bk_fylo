import React from 'react'
import {Flex, Heading, Link as ChakraLink} from '@chakra-ui/react'
import Logo from '../assets/images/logo.svg'
const Navbar = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} marginBottom={'20px'}  >
      <Heading><img src={Logo} alt="logo" /></Heading>
      <section>
        <ChakraLink _hover={{textDecoration : 'none',}} href='#'> Features </ChakraLink>
        <ChakraLink _hover={{textDecoration : 'none',}} href='#'> Team </ChakraLink>
        <ChakraLink _hover={{textDecoration : 'none',}} href='#'> Sign in </ChakraLink>
      </section>
    </Flex>
  )
}

export default Navbar