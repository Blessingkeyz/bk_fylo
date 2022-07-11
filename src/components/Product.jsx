import React from 'react'
import Sectionprop from './Sectionprop'
import {Flex, Link as ChakraLink} from '@chakra-ui/react'
import Illus from '../assets/images/illustration-2.svg' ;
import Bgcurve from '../assets/images/bg-curve-desktop.svg' ;
import Arrow from '../assets/images/icon-arrow.svg' ;
import Quo from '../assets/images/icon-quotes.svg' ;

const Product = () => {
  return (
    <div>
      <img src={Bgcurve} alt="Illu" width={'100%'} height={'100%'} />
      <Flex bgColor={'#F8F8FE'}>
        <div >  
          <Sectionprop 
          header = {' Stay productive, wherever you are '}
          text = { 'Never let location be an issue when accessing your files. Fylo has you covered for all your storage needs.' }
          width = {'60%'}
          />
          <Sectionprop 
          text = { 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attaachments required!      ' }
          width = {'60%'}
          />
          <Flex>
            <ChakraLink _hover={{textDecoration : 'none',}} color={'green'} href='#'> See how Fylo works </ChakraLink>
            <img src={Arrow} alt="Arrow" width={'20px'} height={'15px'} />
          </Flex>
          <img src={Quo} alt="Quo" width={'30px'} height={'30px'} />
          <Sectionprop 
          header = {''}
          text = { 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' }
          width = {'25%'}
          backgroundColor = {'white'}
          paddingLeft={'50px'}
          />
        </div>
        <img src={Illus} alt="Illus" width={'20%'} height={'20%'} />
      </Flex>
    </div>
  )
}

export default Product