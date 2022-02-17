import type { AppProps } from 'next/app'
import { ChakraProvider, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Link from 'next/link'
import { useRouter } from 'next/router'

import "swiper/scss";
import "swiper/css/navigation";
import "swiper/scss/pagination";
import "../styles/swiper.scss"
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  
  
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp