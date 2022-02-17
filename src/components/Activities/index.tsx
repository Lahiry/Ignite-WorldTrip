import { Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export function Activities() {
  return (
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
  );
}