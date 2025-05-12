import { Box, Flex, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <Box as="nav" position="fixed" w="100%" bg={bg} color={color} zIndex={1} transition="box-shadow 0.2s" boxShadow={scrolled ? 'md' : 'none'}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW={["100%", "100%", "1200px"]}
        mx="auto"
        px={[2, 4, 8]}
      >
        <Box fontWeight="bold" fontSize="xl">
          Portfolio
        </Box>
        <Flex gap={4}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                variant="ghost"
                color={color}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 