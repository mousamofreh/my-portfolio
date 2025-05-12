import { Box, Container, Heading, SimpleGrid, Text, VStack, useColorModeValue, Progress } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'Chakra UI', level: 75 }
    ] },
    { category: 'Backend', items: [
      { name: 'ASP.NET', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 80 }
    ] },
    { category: 'Tools', items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 60 }
    ] }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Box id="skills" py={20} w="100vw" position="relative" bg="white" _dark={{ bg: 'gray.800' }}>
        <Container maxW={["100%", "100%", "1200px"]} px={[2, 4, 8]}>
          <VStack spacing={12}>
            <Heading as="h2" size="xl" color={useColorModeValue('blue.700', 'blue.200')}>
              Skills
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
              {skills.map((skillGroup) => (
                <Box
                  key={skillGroup.category}
                  p={6}
                  bg="whiteAlpha.700"
                  _dark={{ bg: 'whiteAlpha.100' }}
                  style={{ backdropFilter: 'blur(8px)' }}
                  rounded="lg"
                  shadow="md"
                  border="1px solid"
                  borderColor="whiteAlpha.400"
                >
                  <VStack spacing={4} align="start">
                    <Heading as="h3" size="md" color={useColorModeValue('blue.600', 'blue.300')}>
                      {skillGroup.category}
                    </Heading>
                    {skillGroup.items.map((skill, idx) => {
                      return (
                        <Box key={skill.name} w="100%">
                          <Text mb={1} color="gray.600" _dark={{ color: 'gray.300' }} fontWeight="medium">
                            {skill.name}
                          </Text>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                            style={{ overflow: 'visible' }}
                          >
                            <Progress value={skill.level} size="sm" colorScheme="blue" borderRadius="md" />
                          </motion.div>
                        </Box>
                      );
                    })}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </motion.div>
  )
}

export default Skills 