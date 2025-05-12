import { Box, Container, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  // Typewriter effect for job title
  const typewriterTexts = [
    'Software Developer',
    'Full Stack',
    'Problem Solver',
  ];
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterTexts[typeIndex % typewriterTexts.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTypeIndex((prev) => prev + 1);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, typeIndex, typewriterTexts]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box
        id="hero"
        minH="100vh"
        w="100vw"
        position="relative"
        display="flex"
        alignItems="center"
        bg="gray.50"
        _dark={{ bg: 'gray.900' }}
      >
        <Container maxW={["100%", "100%", "1200px"]} px={[2, 4, 8]}>
          <VStack spacing={6} align="start">
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
            >
              Hi, I'm Mousa Mofreh
            </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.300' }}>
              {displayed}
              <Box as="span" display="inline-block" w="1ch" bg="currentColor" ml={1} h="1.2em" borderRadius="sm" opacity={0.7} />
            </Text>
            <Text fontSize="lg" maxW="600px" color="gray.600" _dark={{ color: 'gray.300' }}>
              I build modern, responsive, and user-friendly web applications using cutting-edge technologies.
              Passionate about creating efficient solutions and learning new technologies.
            </Text>
            <HStack spacing={4}>
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                <Button colorScheme="blue" size="lg">
                  View My Work
                </Button>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </HStack>
            <HStack spacing={4} pt={4}>
              <motion.div whileHover={{ scale: 1.2, color: '#4299e1' }} style={{ display: 'inline-block' }}>
                <Button
                  as="a"
                  href="https://github.com/mousamofreh"
                  target="_blank"
                  variant="ghost"
                  leftIcon={<FaGithub />}
                >
                  GitHub
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: '#4299e1' }} style={{ display: 'inline-block' }}>
                <Button
                  as="a"
                  href="https://linkedin.com/in/mosamofreh"
                  target="_blank"
                  variant="ghost"
                  leftIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: '#4299e1' }} style={{ display: 'inline-block' }}>
                <Button
                  as="a"
                  href="https://x.com/mosamofreh"
                  target="_blank"
                  variant="ghost"
                  leftIcon={<FaTwitter />}
                >
                  Twitter
                </Button>
              </motion.div>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </motion.div>
  )
}

export default Hero 