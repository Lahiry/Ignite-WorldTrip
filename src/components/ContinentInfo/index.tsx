import { Box, Heading, HStack, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

interface ContinentInfoProps {
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
}

export function ContinentInfo({ text, numberOfCountries, numberOfLanguages, numberOfCities }: ContinentInfoProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  
  return (
    <>
      {isMobile ? (
        <HStack spacing={{base: "20", '2xl': "60"}} justify="center" mt="20">
          <Box maxW={{base: 500, '2xl': 600}}>
            <Text lineHeight={{base: "8", '2xl': "10"}} fontWeight="400" fontSize={{base: "xl", '2xl': "2xl"}} align="justify" >{text}</Text>
          </Box>
          <SimpleGrid columns={3}>
            <VStack>
              <Heading fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="600" color="yellow.400">{numberOfCountries}</Heading>
              <Text fontSize={{base: "xl", '2xl': "2xl"}} fontWeight="600">países</Text>
            </VStack>
            <VStack>
              <Heading fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="600" color="yellow.400">{numberOfLanguages}</Heading>
              <Text fontSize={{base: "xl", '2xl': "2xl"}} fontWeight="600">línguas</Text>
            </VStack>
            <VStack>
              <Heading fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="600" color="yellow.400">{numberOfCities}</Heading>
              <Text fontSize={{base: "xl", '2xl': "2xl"}} fontWeight="600">cidades +100</Text>
            </VStack>
          </SimpleGrid>
        </HStack>
      ) : (
        <HStack spacing={{base: "20", '2xl': "60"}} justify="center" mt="20">
          <Box maxW={{base: 500, '2xl': 600}}>
            <Text lineHeight={{base: "8", '2xl': "10"}} fontWeight="400" fontSize={{base: "xl", '2xl': "2xl"}} align="justify" >{text}</Text>
          </Box>
          <SimpleGrid columns={3}>
            <VStack>
              <Heading fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="600" color="yellow.400">{numberOfCountries}</Heading>
              <Text fontSize={{base: "xl", '2xl': "2xl"}} fontWeight="600">países</Text>
            </VStack>
            <VStack>
              <Heading fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="600" color="yellow.400">{numberOfLanguages}</Heading>
              <Text fontSize={{base: "xl", '2xl': "2xl"}} fontWeight="600">línguas</Text>
            </VStack>
            <VStack>
              <Heading fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="600" color="yellow.400">{numberOfCities}</Heading>
              <Text fontSize={{base: "xl", '2xl': "2xl"}} fontWeight="600">cidades +100</Text>
            </VStack>
          </SimpleGrid>
        </HStack>
      )} 
    </>
  );
}