import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter()

  let isHomePage = false;

  if (asPath === '/') {
    isHomePage = true;
  }
  
  return (
    <Flex as="header" w="100%" h="20" position="relative" justify="center" align="center">
      { !isHomePage && (
        <Link href="/" passHref>
          <ChakraLink>
            <Image src="/images/back.svg" alt="Voltar" position="absolute" bottom="6" left="36" />
          </ChakraLink>
        </Link>
      )}
      <Image src="/images/logo.svg" alt="Logo" />
    </Flex>
  );
}