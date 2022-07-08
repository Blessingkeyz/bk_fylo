import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box bgColor={'facebook.100'}>
      <Navbar />
      <Home /> 
    </Box>
  )
}

export default App
