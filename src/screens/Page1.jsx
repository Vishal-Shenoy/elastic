import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../constants/theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page1 = () => {
  useGSAP(() => {
    gsap.from("#page1Text>span", {
      y: "100%",
      delay: 2.5,
      stagger: 0.05,
    });
  }, []);

  return (
    <Flex
      height={{ base: "50vh", sm: "60vh", md: "80vh", lg: "100vh" }}
      id="page1"
      background={theme.secondary}
      position="relative"
      alignItems="center"
      justifyContent="center"
      overflowY="hidden"
    >
      <Flex
        fontSize="47vw"
        lineHeight="40vw"
        fontFamily="font2"
        fontWeight="800"
        letterSpacing="0px"
        color={theme.primary}
        id="page1Text"
        overflow="hidden"
      >
        <span>h</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
      </Flex>
    </Flex>
  );
};

export default Page1;
