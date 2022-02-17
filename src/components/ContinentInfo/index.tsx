import { Box, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

interface ContinentInfoProps {
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
}

export function ContinentInfo({ text, numberOfCountries, numberOfLanguages, numberOfCities }: ContinentInfoProps) {
  return (
    <HStack spacing="60" justify="center" mt="20">
      <Box maxW={600}>
        <Text lineHeight="10" fontWeight="400" fontSize="2xl" align="justify" >{text}</Text>
      </Box>
      <SimpleGrid columns={3}>
        <VStack>
          <Heading fontSize="5xl" fontWeight="600" color="yellow.400">{numberOfCountries}</Heading>
          <Text fontSize="2xl" fontWeight="600">países</Text>
        </VStack>
        <VStack>
          <Heading fontSize="5xl" fontWeight="600" color="yellow.400">{numberOfLanguages}</Heading>
          <Text fontSize="2xl" fontWeight="600">línguas</Text>
        </VStack>
        <VStack>
          <Heading fontSize="5xl" fontWeight="600" color="yellow.400">{numberOfCities}</Heading>
          <Text fontSize="2xl" fontWeight="600">cidades +100</Text>
        </VStack>
      </SimpleGrid>
    </HStack>
  );
}