import { Box, Flex, Heading } from "@chakra-ui/react";

import { api } from "../services/api";
import { GetStaticProps } from "next";
import { MainBanner } from "../components/MainBanner";
import { Activities } from "../components/Activities";
import { Slides } from "../components/Slides";

interface ContinentData {
  id: string;
  name: string;
  description: string;
  swiperImage: string;
}

interface HomeProps {
  continents: ContinentData[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex flexDir="column" align="center">
      <MainBanner />

      <Activities />
      
      <Box h="2px" w="24" my="20" bg="gray.600" />
      
      <Heading textAlign="center" lineHeight="auto" color="gray.600" fontSize="4xl" fontWeight="500">
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slides continents={continents} />
     
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents")

  const continents = response.data

  return {
    props: {
      continents
    }
  }
}