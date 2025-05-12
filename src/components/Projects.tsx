import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, HStack, Tag, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Lost and Found System',
      description: 'A full-stack web application built with PHP and Html, Css, JavaScript',
      image: 'https://i.ytimg.com/vi/wnhfJpxTGOY/maxresdefault.jpg',
      tags: ['PHP', 'Html, Css', 'JavaScript, SQL'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
      link: '#'
    },
    {
      title: 'Arabic Sentiment Analysis of tweets',
      description: 'A full-stack web application built with Djnago and Python',
      image: 'https://huggingface.co/blog/assets/85_sentiment_analysis_twitter/thumbnail.png',
      tags: ['Djnago', 'Python'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
      link: '#'
    },
    {
      title: 'Library Management System',
      description: 'A desktop application built with C# and Windows Forms',
      image: 'https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png',
      tags: ['C#', 'Windows Forms', 'SQL'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
      link: '#'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Box id="projects" py={20} w="100vw" position="relative" bg="gray.50" _dark={{ bg: 'gray.900' }}>
        <Container maxW={["100%", "100%", "1200px"]} px={[2, 4, 8]}>
          <VStack spacing={12}>
            <Heading as="h2" size="xl" color={useColorModeValue('blue.700', 'blue.200')}>
              Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0, 0, 0, 0.18)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Box
                    bg="whiteAlpha.700"
                    _dark={{ bg: 'whiteAlpha.100' }}
                    style={{ backdropFilter: 'blur(8px)' }}
                    rounded="lg"
                    shadow="md"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="whiteAlpha.400"
                  >
                    <Image src={project.image} alt={project.title} />
                    <VStack p={6} spacing={4} align="start">
                      <Heading as="h3" size="md">
                        {project.title}
                      </Heading>
                      <Text color="gray.600" _dark={{ color: 'gray.300' }}>
                        {project.description}
                      </Text>
                      <HStack spacing={2} mb={4} flexWrap="wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex} colorScheme="blue" size="sm">
                            {tag}
                          </Tag>
                        ))}
                      </HStack>
                      <HStack spacing={4}>
                        <Box
                          as="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="gray.600"
                          _hover={{ color: 'blue.500' }}
                        >
                          <FaGithub size={20} />
                        </Box>
                        <Box
                          as="a"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="gray.600"
                          _hover={{ color: 'blue.500' }}
                        >
                          <FaExternalLinkAlt size={20} />
                        </Box>
                      </HStack>
                      <Link href={project.link} color="blue.500" isExternal>
                        View Project →
                      </Link>
                    </VStack>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </motion.div>
  )
}

export default Projects 