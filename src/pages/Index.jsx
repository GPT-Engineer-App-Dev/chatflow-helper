import { Container, Text, VStack, Box, Heading, SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, Button, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.700" color="white" p={4} mb={8}>
        <VStack spacing={4} align="start">
          <Heading size="lg">Autoresponder Website</Heading>
          <Box>
            <Link href="#introduction" mr={4}>Introduction</Link>
            <Link href="#features" mr={4}>Features</Link>
            <Link href="#contact" mr={4}>Contact</Link>
          </Box>
        </VStack>
      </Box>

      {/* Introduction Section */}
      <Box id="introduction" mb={8}>
        <Heading as="h2" size="xl" mb={4}>Welcome to Your Personal Autoresponder Website</Heading>
        <Text fontSize="lg">This website offers a powerful autoresponder feature for messaging. Whether you're busy or away, our autoresponder ensures you never miss a message.</Text>
      </Box>

      {/* Features Section */}
      <Box id="features" mb={8}>
        <Heading as="h2" size="xl" mb={4}>Features & Advantages</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Text>★ Auto-reply to WhatsApp or WA Business</Text>
            <Text>★ Individually customizable</Text>
            <Text>★ Many automation tools included</Text>
            <Text>★ React to all messages when you're busy</Text>
            <Text>★ Send replies to specific messages</Text>
            <Text>★ Welcome message for new chats</Text>
            <Text>★ Live answer replacements (time, name...)</Text>
            <Text>★ Multiple replies in one rule</Text>
            <Text>★ Works with contacts, groups and unknown numbers</Text>
          </GridItem>
          <GridItem>
            <Text>★ Ignore and specify contacts and groups</Text>
            <Text>★ Automatic scheduler with delay</Text>
            <Text>★ AI with ChatGPT/GPT-3/GPT-4 or Dialogflow.com</Text>
            <Text>★ Backup rules for easy recovery</Text>
            <Text>★ Personal agent for your business</Text>
            <Text>★ Almost everything is possible with this bot!</Text>
            <Text>★ Auto Assign Label: Automatically label numbers through the chatbot.</Text>
            <Text>★ Auto follow-up prospect</Text>
            <Text>★ Bulking message with image and video</Text>
            <Text>★ Auto send message with image and video</Text>
            <Text>★ Converse: Activate number with the automatic warm-up feature.</Text>
            <Text>★ Support Malay language and 50 languages</Text>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Contact Form */}
      <Box id="contact" mb={8}>
        <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="blue" size="lg">Send Message</Button>
          </GridItem>
          <GridItem>
            <VStack spacing={4} align="start">
              <Box>
                <FaWhatsapp /> <Link href="https://wa.me/your-number" isExternal>WhatsApp</Link>
              </Box>
              <Box>
                <FaEnvelope /> <Link href="mailto:your-email@example.com">Email</Link>
              </Box>
              <Box>
                <FaPhone /> <Link href="tel:+1234567890">Phone</Link>
              </Box>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.700" color="white" p={4} mt={8}>
        <Text textAlign="center">© 2023 Autoresponder Website. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;