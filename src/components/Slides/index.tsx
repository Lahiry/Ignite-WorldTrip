import { Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from 'next/link';

interface ContinentData {
  id: string;
  name: string;
  description: string;
  swiperImage: string;
}

interface SlidesProps {
  continents: ContinentData[];
}

export function Slides({ continents }: SlidesProps) {
  return (
    <Flex w="90%" h="xl" my="20">
      <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Link href={`/continent/${continent.id}`} passHref>
              <ChakraLink _hover={{textDecoration: "none"}} >
                <Flex
                  w="100%"
                  h="100%"
                  flexDir="column"
                  justify="center"
                  align="center"
                  fontWeight="700"
                  bgImage={`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url(${continent.swiperImage})`}
                  bgSize="cover"
                  bgPosition="center"
                >
                  <Heading fontSize="4xl" color="gray.50">{continent.name}</Heading>
                  <Text mt="6" fontSize="2xl" color="gray.100">{continent.description}</Text>
                </Flex>
              </ChakraLink>
            </Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}