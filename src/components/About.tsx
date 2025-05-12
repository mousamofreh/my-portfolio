import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Box id="about" py={20} w="100vw" position="relative" bg="gray.50" _dark={{ bg: 'gray.900' }}>
        <Container maxW={["100%", "100%", "1200px"]} px={[2, 4, 8]}>
          <VStack spacing={6} align="start">
            <Heading as="h2" size="xl" color={useColorModeValue('blue.700', 'blue.200')}>
              About Me
            </Heading>
            <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }}>
              I am a passionate software developer with expertise in building modern web applications.
              My journey in software development has equipped me with a strong foundation in both
              frontend and backend technologies.
            </Text>
          </VStack>
        </Container>
      </Box>
    </motion.div>
  )
}

export default About 