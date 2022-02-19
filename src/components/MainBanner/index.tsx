import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function MainBanner() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  
  return (
    <>
      {isMobile ? (
        <Flex maxHeight="12rem" w="100%" px="32" justify="flex-start" align="flex-start" bgImage="images/background.svg" bgSize="cover" bgPosition="center">
          <Box>
            <Heading lineHeight="auto" color="gray.50" fontSize="2xl" fontWeight="500">
              5 Continentes,<br />infinitas possibilidades.
            </Heading>
            <Text mt="5" color="gray.100" fontSize="md" >Chegou a hora de tirar do papel a viagem que<br />você sempre sonhou.</Text>
          </Box>
        </Flex>
      ) : (
        <Flex maxHeight={{base: "2xs", '2xl': "xs"}} w="100%" px={{base: "32", '2xl': "56"}} justify="space-between" align="center" bgImage="images/background.svg" bgSize="cover" bgPosition="center">
          <Box>
            <Heading lineHeight="auto" color="gray.50" fontSize={{base: "2xl", '2xl': "4xl"}} fontWeight="500">
              5 Continentes,<br />infinitas possibilidades.
            </Heading>
            <Text mt="5" color="gray.100" fontSize="xl" >Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
          </Box>
          <Image src="images/airplane.svg" alt="avião" w={{base: "22rem", '2xl': "md"}} mt={{base: "20", '2xl': "28"}} />
        </Flex>
      )}
    </>
  );
}