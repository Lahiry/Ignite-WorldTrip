import { Box, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  continentImage: string;
  continentName: string;
}

export function ContinentBanner({ continentImage, continentName }: ContinentBannerProps) {
  return (
    <Box h="md" w="100%" position="relative" px="56" bgImage={continentImage} bgSize="cover" bgPosition="center">
      <Heading position="absolute" left="40" bottom="20" color="gray.50" fontSize="5xl" fontWeight="500">
        {continentName}
      </Heading>
    </Box>
  );
}