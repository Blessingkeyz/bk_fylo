import React from 'react'
import {Heading} from '@chakra-ui/react'

const Sectionprop = ( { header, text, width, border, margin, paddingLeft, backgroundColor } ) => {
  return (
    <div 
    style ={{width : width,
    border :border,
    backgroundColor: backgroundColor,
    paddingLeft : paddingLeft, 
    margin : margin}} >
        <Heading>{header} </Heading>
        <p>{text} </p>
    </div>
  )
}

export default Sectionprop ;