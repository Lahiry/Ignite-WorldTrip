import { Box, Flex, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";

interface Country {
  id: string;
  name: string;
  flag: string;
  capital: string;
  image: string;
}

interface ContinentData {
  name: string;
  text: string;
  bannerImage: string;
  numberOfCountries: number;
  numberOfLanguages: number;                                  
  numberOfCities: number;
  countries: Country[];
}

interface ContinentProps {
  continent: ContinentData
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex flexDir="column" align="center">
      <Box h="md" w="100%" position="relative" px="56" bgImage={continent.bannerImage} bgSize="cover" bgPosition="center">
        <Heading position="absolute" left="40" bottom="20" color="gray.50" fontSize="5xl" fontWeight="500">
          {continent.name}
        </Heading>
      </Box>

      <Box maxW={1600}>
        <HStack spacing="60" justify="center" mt="20">
          <Box maxW={600}>
            <Text lineHeight="10" fontWeight="400" fontSize="2xl" align="justify" >{continent.text}</Text>
          </Box>
          <SimpleGrid columns={3}>
            <VStack>
              <Heading fontSize="5xl" fontWeight="600" color="yellow.400">{continent.numberOfCountries}</Heading>
              <Text fontSize="2xl" fontWeight="600">países</Text>
            </VStack>
            <VStack>
              <Heading fontSize="5xl" fontWeight="600" color="yellow.400">{continent.numberOfLanguages}</Heading>
              <Text fontSize="2xl" fontWeight="600">línguas</Text>
            </VStack>
            <VStack>
              <Heading fontSize="5xl" fontWeight="600" color="yellow.400">{continent.numberOfCities}</Heading>
              <Text fontSize="2xl" fontWeight="600">cidades +100</Text>
            </VStack>
          </SimpleGrid>
        </HStack>

        <Heading mt="20" fontSize="5xl" fontWeight="500">Cidades +100</Heading>

        <SimpleGrid columns={4} spacing={5}>
          {continent.countries.map(country => (
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
      </Box>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!

  const response = await api.get(`/continents/${slug}`)

  const continent = await response.data

  return {
    props: {
      continent
    }
  }
}