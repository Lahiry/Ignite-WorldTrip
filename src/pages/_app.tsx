import type { AppProps } from 'next/app'
import { ChakraProvider, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Link from 'next/link'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  let isHomePage = false;

  if (asPath === '/') {
    isHomePage = true;
  }
  
  return (
    <ChakraProvider theme={theme}>

      <Flex  w="100%" h="28" position="relative" justify="center" align="center">
        { !isHomePage && (
          <Link href="/" passHref>
            <ChakraLink>
              <Image src="images/back.svg" alt="Voltar" position="absolute" left="36" />
            </ChakraLink>
          </Link>
        )}
        <Image src="images/logo.svg" alt="Logo" />
      </Flex>


      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp