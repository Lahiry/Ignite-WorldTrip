import { Box, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  

  return (
    <Flex flexDir="column" align="center">
      <Flex maxHeight="md" w="100%" px="56" justify="space-between" align="center" bgImage="images/background.svg" bgSize="cover">
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
    </Flex>
  )
}