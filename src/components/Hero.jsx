import React from 'react' ;
import Sectionprop from './Sectionprop' ;
import Illu from '../assets/images/illustration-1.svg' ;
import { Flex } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex>
      <Sectionprop 
      // className = {'hero'}
      header = {' All your files in one secure location, accessible anywhere. '}
      text = {'Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.  '}
      width = {'40%'}
      
      />
      <img src={Illu} alt="Illu" width={'25%'} height={'25%'} />
    </Flex>
  )
}

export default Hero