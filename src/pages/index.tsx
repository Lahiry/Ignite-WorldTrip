import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  

  return (
    <Flex h="sm" px="56" justify="space-between" align="center" bgImage="images/background.svg" bgSize="cover">
      <Box>
        <Heading lineHeight="auto" color="gray.50" fontSize="4xl" fontWeight="500">
          5 Continentes,<br />infinitas possibilidades.
        </Heading>
        <Text mt="5" color="gray.100" fontSize="xl" >Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
      </Box>
      <Image src="images/airplane.svg" alt="avião" w="lg" mt="32" />
    </Flex>
  )
}