import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";

interface ContinentBannerProps {
  continentImage: string;
  continentName: string;
}

export function ContinentBanner({ continentImage, continentName }: ContinentBannerProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  
  return (
    <>
      {isMobile ? (
        <Box h={{base: "xs", '2xl': "md"}} w="100%" position="relative" px="56" bgImage={continentImage} bgSize="cover" bgPosition="center">
          <Heading position="absolute" left={{base: "24", '2xl': "40"}} bottom={{base: "12", '2xl': "20"}} color="gray.50" fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="500">
            {continentName}
          </Heading>
        </Box>

      ) : (
        <Box h={{base: "xs", '2xl': "md"}} w="100%" position="relative" px="56" bgImage={continentImage} bgSize="cover" bgPosition="center">
          <Heading position="absolute" left={{base: "24", '2xl': "40"}} bottom={{base: "12", '2xl': "20"}} color="gray.50" fontSize={{base: "4xl", '2xl': "5xl"}} fontWeight="500">
            {continentName}
          </Heading>
        </Box>
      )}
    </>
  );
}