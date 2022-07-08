import React from 'react' ;
import Sectionprop from './Sectionprop' ;

const Hero = () => {
  return (
    <div>
      <Sectionprop 
      // className = {'hero'}
      header = {' All your files in one secure location, accessible anywhere. '}
      text = {'Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.  '}
      width = {'50%'}
      border= {'1px solid red'}
      />
    </div>
  )
}

export default Hero