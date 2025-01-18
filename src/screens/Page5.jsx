import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../constants/theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page5 = () => {
  useGSAP(() => {
    gsap.to("#page5Txt", {
      x: "-90%",
      duration: 10,
      scrollTrigger: {
        scroller: "body",
        trigger: "#page5",
        scrub: 0.5,
        pin: true,
      },
    });
  });
  return (
    <Flex
      id="page5"
      height="100vh"
      width="100vw"
      overflowX="hidden"
      background={theme.lightBlue}
      alignItems="center"
      paddingLeft="100px"
    >
      <Text
        id="page5Txt"
        fontWeight="bold"
        fontFamily="font1"
        fontSize={{ base: "90vw", lg: "40vw" }}
        lineHeight="40vw"
        textTransform="uppercase"
      >
        Expertises
      </Text>
    </Flex>
  );
};

export default Page5;
