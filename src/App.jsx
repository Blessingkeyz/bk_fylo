import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Box } from '@chakra-ui/react'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <Box bgColor={'white'}>
      <div className='app'>
        <Navbar />
        <Home /> 
      </div>
      <Subscribe />
      <Footer />
    </Box>
  )
}

export default App
