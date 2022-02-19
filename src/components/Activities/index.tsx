import { Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export function Activities() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  
  return (
    <>
      {isMobile ? (
        <SimpleGrid
          columns={5}
          spacing="8"
          maxW="200px"
          mt="20"
          fontSize={{base: "lg", '2xl': "xl"}}
          fontWeight="600"
        >
          <VStack spacing="4">
            {/* <Image src="images/cocktail.svg" alt="cocktail" w={{base: "16", '2xl': "20"}}/> */}
            <Text>vida noturna</Text>
          </VStack>
          <VStack spacing="4">
            {/* <Image src="images/surf.svg" alt="surf" w={{base: "16", '2xl': "20"}} /> */}
            <Text>praia</Text>
          </VStack>
          <VStack spacing="4">
            {/* <Image src="images/building.svg" alt="prédio" w={{base: "16", '2xl': "20"}} /> */}
            <Text>moderno</Text>
          </VStack>
          <VStack spacing="4">
            {/* <Image src="images/museum.svg" alt="museu" w={{base: "16", '2xl': "20"}} /> */}
            <Text>clássico</Text>
          </VStack>
          <VStack spacing="4">
            {/* <Image src="images/earth.svg" alt="mundo" w={{base: "16", '2xl': "20"}} /> */}
            <Text>e mais...</Text>
          </VStack>
        </SimpleGrid>
      ) : (
        <SimpleGrid
          columns={5}
          spacing={{base: "24", '2xl': "48"}}
          mt={{base: "24", '2xl': "36"}}
          fontSize={{base: "lg", '2xl': "xl"}}
          fontWeight="600"
        >
          <VStack spacing="4">
            <Image src="images/cocktail.svg" alt="cocktail" w={{base: "16", '2xl': "20"}}/>
            <Text>vida noturna</Text>
          </VStack>
          <VStack spacing="4">
            <Image src="images/surf.svg" alt="surf" w={{base: "16", '2xl': "20"}} />
            <Text>praia</Text>
          </VStack>
          <VStack spacing="4">
            <Image src="images/building.svg" alt="prédio" w={{base: "16", '2xl': "20"}} />
            <Text>moderno</Text>
          </VStack>
          <VStack spacing="4">
            <Image src="images/museum.svg" alt="museu" w={{base: "16", '2xl': "20"}} />
            <Text>clássico</Text>
          </VStack>
          <VStack spacing="4">
            <Image src="images/earth.svg" alt="mundo" w={{base: "16", '2xl': "20"}} />
            <Text>e mais...</Text>
          </VStack>
        </SimpleGrid>
      )}
    </>
  );
}