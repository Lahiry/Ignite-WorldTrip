import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function MainBanner() {
  return (
    <Flex maxHeight="xs" w="100%" px={["40"]} justify="space-between" align="center" bgImage="images/background.svg" bgSize="cover" bgPosition="center">
      <Box>
        <Heading lineHeight="auto" color="gray.50" fontSize="4xl" fontWeight="500">
          5 Continentes,<br />infinitas possibilidades.
        </Heading>
        <Text mt="5" color="gray.100" fontSize="xl" >Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
      </Box>
      <Image src="images/airplane.svg" alt="avião" w="md" mt="28" />
    </Flex>
  );
}