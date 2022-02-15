import { Box, Flex, Heading, Image, Link as ChakraLink, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { api } from "../services/api";
import { GetStaticProps } from "next";
import Link from "next/link";

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
      <Flex maxHeight="xs" w="100%" px={["40"]} justify="space-between" align="center" bgImage="images/background.svg" bgSize="cover" bgPosition="center">
        <Box>
          <Heading lineHeight="auto" color="gray.50" fontSize="4xl" fontWeight="500">
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text mt="5" color="gray.100" fontSize="xl" >Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
        </Box>
        <Image src="images/airplane.svg" alt="avião" w="md" mt="28" />
      </Flex>
      <SimpleGrid
        columns={5}
        spacing="48"
        mt="36"
        fontSize="xl"
        fontWeight="600"
      >
        <VStack spacing="6">
          <Image src="images/cocktail.svg" alt="cocktail" />
          <Text>vida noturna</Text>
        </VStack>
        <VStack spacing="6">
          <Image src="images/surf.svg" alt="surf" />
          <Text>praia</Text>
        </VStack>
        <VStack spacing="6">
          <Image src="images/building.svg" alt="prédio" />
          <Text>moderno</Text>
        </VStack>
        <VStack spacing="6">
          <Image src="images/museum.svg" alt="museu" />
          <Text>clássico</Text>
        </VStack>
        <VStack spacing="6">
          <Image src="images/earth.svg" alt="mundo" />
          <Text>e mais...</Text>
        </VStack>
      </SimpleGrid>
        
      <Box h="2px" w="24" my="20" bg="gray.600" />
      
      <Heading textAlign="center" lineHeight="auto" color="gray.600" fontSize="4xl" fontWeight="500">
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Flex w="90%" h="xl" my="20">
        <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
          {continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <Link href={`/continent/${continent.id}`} passHref>
                <ChakraLink _hover={{textDecoration: "none"}} >
                  <Flex
                    w="100%"
                    h="100%"
                    flexDir="column"
                    justify="center"
                    align="center"
                    fontWeight="700"
                    bgImage={`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url(${continent.swiperImage})`}
                    bgSize="cover"
                    bgPosition="center"
                  >
                    <Heading fontSize="4xl" color="gray.50">{continent.name}</Heading>
                    <Text mt="6" fontSize="2xl" color="gray.100">{continent.description}</Text>
                  </Flex>
                </ChakraLink>
              </Link>
          </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

     
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