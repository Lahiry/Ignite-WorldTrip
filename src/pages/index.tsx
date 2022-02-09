import { Box, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { api } from "../services/api";

interface ContinentData {
  name: string;
  description: string;
  backgroundImage: string;
}

interface HomeProps {
  continents: ContinentData[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex flexDir="column" align="center">
      <Flex maxHeight="md" w="100%" px="56" justify="space-between" align="center" bgImage="images/background.svg" bgSize="cover" bgPosition="center">
        <Box>
          <Heading lineHeight="auto" color="gray.50" fontSize="5xl" fontWeight="500">
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text mt="5" color="gray.100" fontSize="xl" >Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
        </Box>
        <Image src="images/airplane.svg" alt="avião" w="xl" mt="36" />
      </Flex>
      <Grid
      templateColumns="repeat(5, 1fr)"
      w="100%"
      maxW={1600}
      mt="36"
      fontSize="2xl"
      fontWeight="600"
      gap={1}
      >
        <GridItem>
          <VStack spacing="8">
            <Image src="images/cocktail.svg" alt="cocktail" />
            <Text>vida noturna</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing="8">
            <Image src="images/surf.svg" alt="surf" />
            <Text>praia</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing="8">
            <Image src="images/building.svg" alt="prédio" />
            <Text>moderno</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing="8">
            <Image src="images/museum.svg" alt="museu" />
            <Text>clássico</Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
        <VStack spacing="8">
            <Image src="images/earth.svg" alt="mundo" />
            <Text>e mais...</Text>
          </VStack>
        </GridItem>
      </Grid>
        
      <Box h="2px" w="24" my="28" bg="gray.600" />
      
      <Heading textAlign="center" lineHeight="auto" color="gray.600" fontSize="5xl" fontWeight="500">
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Flex w="90%" h="xl" my="20">
        <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
          {continents.map(continent => (
            <SwiperSlide>
              <Flex
                w="100%"
                h="100%"
                // position="relative"
                flexDir="column"
                justify="center"
                align="center"
                fontWeight="700"
                bgImage={`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url(${continent.backgroundImage})`}
                bgSize="cover"
                bgPosition="center"
                 
              >
                <Heading fontSize="5xl" color="gray.50">{continent.name}</Heading>
                <Text mt="6" fontSize="2xl" color="gray.100">{continent.description}</Text>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

     
    </Flex>
  )
}

export const getStaticProps = async () => {
  const response = await api.get("/continents")

  const continents = response.data

  return {
    props: {
      continents
    }
  }
}