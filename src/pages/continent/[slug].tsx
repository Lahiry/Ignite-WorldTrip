import { Box, Flex, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Cities } from "../../components/Cities";
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
      <ContinentBanner continentImage={continent.bannerImage} continentName={continent.name} />

      <Box maxW={{base: 1000, '2xl': 1600}}>
        
        <ContinentInfo text={continent.text} numberOfCountries={continent.numberOfCountries} numberOfLanguages={continent.numberOfLanguages} numberOfCities={continent.numberOfCities} />

        <Heading mt="20" fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="500">Cidades +100</Heading>

        <Cities countries={continent.countries} />
        
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