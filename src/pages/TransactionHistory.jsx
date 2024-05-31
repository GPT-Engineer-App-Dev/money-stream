import { Box, Container, Heading, Table, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from API or local storage
    const fetchTransactions = async () => {
      // Mock data for now
      const data = [
        { id: 1, date: "2023-10-01", description: "Payment received", amount: 500, balance: 5000 },
        { id: 2, date: "2023-10-05", description: "Electric bill", amount: -100, balance: 4900 },
        { id: 3, date: "2023-10-10", description: "Internet bill", amount: -50, balance: 4850 },
      ];
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <Container maxW="container.xl" centerContent py="20">
      <VStack spacing={8} width="100%">
        <Heading as="h2" size="xl">
          Transaction History
        </Heading>
        <Box width="100%" overflowX="auto">
          <Table>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Description</Th>
                <Th>Amount</Th>
                <Th>Balance</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.date}</Td>
                  <Td>{transaction.description}</Td>
                  <Td>{transaction.amount}</Td>
                  <Td>{transaction.balance}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default TransactionHistory;