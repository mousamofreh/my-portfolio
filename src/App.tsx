import { ChakraProvider, Box, useColorModeValue, IconButton, Fade } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import theme from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const [showTop, setShowTop] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll(height ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg={bg} overflowX="hidden">
        {/* Scroll Progress Bar */}
        <Box position="fixed" top={0} left={0} w="100vw" h="4px" zIndex={200}>
          <Box h="100%" bgGradient="linear(to-r, blue.400, purple.500)" w={`${scroll}%`} transition="width 0.2s" />
        </Box>
        <Navbar />
        <div style={{ paddingTop: '64px' }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Fade in={showTop}>
          <IconButton
            icon={<FaArrowUp />}
            aria-label="Back to top"
            position="fixed"
            bottom={8}
            right={8}
            zIndex={100}
            colorScheme="blue"
            size="lg"
            rounded="full"
            shadow="lg"
            onClick={scrollToTop}
          />
        </Fade>
      </Box>
    </ChakraProvider>
  )
}

export default App
