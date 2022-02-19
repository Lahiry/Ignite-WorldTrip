import { Flex, Image, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/router";

export function Header() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  const { asPath } = useRouter()

  let isHomePage = false;

  if (asPath === '/') {
    isHomePage = true;
  }
  
  return (
    <>
      {isMobile ? (
        <Flex as="header" w="100%" h={16} position="relative" justify="center" align="center">
          { !isHomePage && (
            <Link href="/" passHref>
              <ChakraLink>
                <Image src="/images/back.svg" alt="Voltar" position="absolute" bottom={{base: "4", '2xl': "6"}} left="36" />
              </ChakraLink>
            </Link>
          )}
          <Image src="/images/logo.svg" w={28} alt="Logo" />
        </Flex>

      ) : (

        <Flex as="header" w="100%" h={{base: 16, '2xl': 20}} position="relative" justify="center" align="center">
          { !isHomePage && (
            <Link href="/" passHref>
              <ChakraLink>
                <Image src="/images/back.svg" alt="Voltar" position="absolute" bottom={{base: "4", '2xl': "6"}} left="36" />
              </ChakraLink>
            </Link>
          )}
          <Image src="/images/logo.svg" w={{base: 36, '2xl': 48}} alt="Logo" />
        </Flex>
      )}
    </>
  );
}