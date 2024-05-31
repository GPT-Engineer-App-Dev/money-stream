import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Text, VStack } from "@chakra-ui/react";

const FundTransfer = () => {
  const [fromAccount, setFromAccount] = useState("checking");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const handleTransfer = () => {
    // Here you would typically handle the transfer logic, e.g., send a request to the server
    setConfirmation(true);
  };

  const handleConfirm = () => {
    // Here you would handle the final confirmation, e.g., send another request to the server
    alert("Transfer completed!");
  };

  return (
    <Container maxW="container.md" centerContent py="20">
      <VStack spacing={8} width="100%" as="form">
        <Heading as="h2" size="xl">
          Fund Transfer
        </Heading>
        {confirmation ? (
          <Box>
            <Text mb={4}>Please confirm the transfer:</Text>
            <Text>From: {fromAccount}</Text>
            <Text>To: {toAccount}</Text>
            <Text>Amount: ${amount}</Text>
            <Text>Description: {description}</Text>
            <Button colorScheme="blue" onClick={handleConfirm}>Confirm Transfer</Button>
          </Box>
        ) : (
          <VStack spacing={4} width="100%">
            <FormControl id="from-account" isRequired>
              <FormLabel>From Account</FormLabel>
              <Select value={fromAccount} onChange={(e) => setFromAccount(e.target.value)}>
                <option value="checking">Checking Account</option>
                <option value="savings">Savings Account</option>
              </Select>
            </FormControl>
            <FormControl id="to-account" isRequired>
              <FormLabel>To Account</FormLabel>
              <Input value={toAccount} onChange={(e) => setToAccount(e.target.value)} />
            </FormControl>
            <FormControl id="amount" isRequired>
              <FormLabel>Amount</FormLabel>
              <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <Button colorScheme="blue" onClick={handleTransfer}>Transfer</Button>
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default FundTransfer;