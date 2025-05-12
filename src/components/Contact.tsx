import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    toast({
      title: 'Message sent!',
      description: "I'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Box id="contact" py={20} w="100vw" position="relative" bg="gray.50" _dark={{ bg: 'gray.900' }}>
        <Container maxW={["100%", "100%", "1200px"]} px={[2, 4, 8]}>
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                as="h2"
                size="xl"
                mb={4}
                color={useColorModeValue('blue.700', 'blue.200')}
              >
                Get In Touch
              </Heading>
              <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }} maxW="800px" mx="auto">
                Have a question or want to work together? Feel free to reach out!
              </Text>
            </Box>

            <Box
              as="form"
              onSubmit={handleSubmit}
              w="100%"
              maxW="600px"
              bg="white"
              _dark={{ bg: 'gray.800' }}
              p={8}
              rounded="lg"
              shadow="md"
            >
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    bg="gray.50"
                    _dark={{ bg: 'gray.700' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    bg="gray.50"
                    _dark={{ bg: 'gray.700' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    bg="gray.50"
                    _dark={{ bg: 'gray.700' }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="100%"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, blue.500, purple.600)',
                  }}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </motion.div>
  )
}

export default Contact