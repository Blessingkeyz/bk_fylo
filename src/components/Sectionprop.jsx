import React from 'react'
import {Heading} from '@chakra-ui/react'

const Sectionprop = ( { header, text, width, border } ) => {
  return (
    <div 
    style ={{width : width,
    border :border, }} >
        <Heading>{header} </Heading>
        <p>{text} </p>
    </div>
  )
}

export default Sectionprop ;