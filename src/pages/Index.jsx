import { Box, Container, Flex, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaHome, FaMoneyCheckAlt, FaExchangeAlt, FaLifeRing, FaHistory } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="blue.600"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Online Bank
          </Heading>
        </Flex>

        <HStack spacing={8} align="center">
          <HStack
            as="a"
            href="#"
            spacing={3}
            color="white"
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaHome} />
            <Text>Home</Text>
          </HStack>
          <HStack
            as="a"
            href="#"
            spacing={3}
            color="white"
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaMoneyCheckAlt} />
            <Text>Accounts</Text>
          </HStack>
          <HStack
            as="a"
            href="#"
            spacing={3}
            color="white"
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaExchangeAlt} />
            <Text>Transfers</Text>
          </HStack>
          <HStack
            as="a"
            href="#"
            spacing={3}
            color="white"
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaLifeRing} />
            <Text>Support</Text>
          </HStack>
          <HStack
            as="a"
            href="/transaction-history"
            spacing={3}
            color="white"
            _hover={{ color: "gray.300" }}
          >
            <Icon as={FaHistory} />
            <Text>Transaction History</Text>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Container maxW="container.xl" centerContent py="20">
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="2xl">
            Welcome to Online Bank
          </Heading>
          <Text fontSize="lg">
            Your one-stop solution for all your banking needs.
          </Text>
          <HStack spacing={8}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Checking Account
              </Text>
              <Text>$5,000.00</Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Savings Account
              </Text>
              <Text>$10,000.00</Text>
            </Box>
          </HStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Box
        as="footer"
        bg="blue.600"
        color="white"
        py={4}
        textAlign="center"
        mt="auto"
      >
        <Text>&copy; 2023 Online Bank. All rights reserved.</Text>
        <HStack spacing={4} justify="center" mt={2}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;