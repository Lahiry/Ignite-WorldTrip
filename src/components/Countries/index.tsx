import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

interface Country {
  image: string;
  capital: string;
  name: string;
  flag: string;
}

interface CountriesProps {
  countries: Country[];
}

export function Countries({ countries }: CountriesProps) {
  return (
    <SimpleGrid columns={4} spacing={5}>
      {countries.map(country => (
        <Box 
          w="fit-content"
          my="8"
          bg="white" 
          borderRadius="4" 
          borderWidth="1px" 
          borderColor="yellow.400"
        >
          <Image 
            w="256px" 
            h="173px"
            objectFit="cover"
            objectPosition="center"
            src={country.image} 
            borderTopRadius="4" 
          />
          <Flex align="center" justify="space-between" mt="5" mb="6" mx="6">
            <Stack spacing="3">
              <Text 
                fontSize="xl" 
                fontFamily="Barlow" 
                fontWeight="semibold" 
                color="gray.900" 
              >
                {country.capital}
              </Text>
              <Text 
                fontSize="md" 
                fontFamily="Barlow" 
                fontWeight="medium" 
                color="gray.800" 
              >
                {country.name}
              </Text>
            </Stack>
            <Image 
              h="30px" 
              w="30px" 
              src={country.flag} 
              borderRadius="50%" 
            />
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}