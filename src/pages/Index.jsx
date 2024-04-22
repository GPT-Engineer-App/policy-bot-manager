import { Box, Heading, Text, Button, VStack, HStack, Input, useToast } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddPolicy = () => {
    toast({
      title: "Policy Added",
      description: "New policy has been added successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDeletePolicy = () => {
    toast({
      title: "Policy Deleted",
      description: "The policy has been deleted successfully.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSearchPolicy = () => {
    toast({
      title: "Search",
      description: "Search results displayed.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Policy Management Bot
        </Heading>
        <Text>Welcome to your policy management system. You can add, search, and delete policies.</Text>

        <HStack>
          <Input placeholder="Enter policy name" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearchPolicy}>
            Search
          </Button>
        </HStack>

        <HStack>
          <Input placeholder="New policy name" />
          <Button leftIcon={<FaPlus />} colorScheme="green" onClick={handleAddPolicy}>
            Add Policy
          </Button>
        </HStack>

        <HStack>
          <Input placeholder="Enter policy name to delete" />
          <Button leftIcon={<FaTrash />} colorScheme="red" onClick={handleDeletePolicy}>
            Delete Policy
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
