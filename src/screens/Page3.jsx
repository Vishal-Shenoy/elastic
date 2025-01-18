import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../constants/theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page3 = () => {
  useGSAP(() => {
    gsap.from("#triggerEffect", {
      y: "100%",
      duration: 0.5,
      scrollTrigger: {
        scroller: "body",
        trigger: "#page3",
        markers: true,
        start: "top -20%",
        end: "top -30%",
      },
    });
  }, []);
  return (
    <Flex
      id="page3"
      flexDirection="column"
      minHeight={{ base: "70vh", lg: "100vh" }}
      width="100vw"
      background={theme.secondary}
      color="#ffffff"
      paddingTop="100px"
      fontSize="13vw"
      lineHeight="13vw"
      paddingInline={{ base: "20px", md: "50px" }}
    >
      <Flex
        justifyContent={{ base: "center", md: "unset" }}
        flexDirection="column"
        alignItems={{ base: "center", md: "unset" }}
      >
        <Flex overflow="hidden">
          {" "}
          <Text fontFamily="font3" id="triggerEffect">
            we
          </Text>
        </Flex>
        <Flex overflow="hidden">
          <Text id="triggerEffect" textTransform="uppercase" fontFamily="font4">
            Let us help
          </Text>
        </Flex>
      </Flex>
      <Flex
        textTransform="uppercase"
        fontFamily="font4"
        gap={{ base: "10px", md: "40px" }}
        justifyContent={{ base: "center", md: "unset" }}
      >
        <Flex gap={{ base: "10px", md: "40px" }} overflow="hidden">
          {" "}
          <Text id="triggerEffect">the </Text>
          <Text id="triggerEffect">marks</Text>
        </Flex>
      </Flex>
      <Flex
        gap={{ base: "10px", md: "40px" }}
        justifyContent={{ base: "center", md: "flex-end" }}
        overflow={"hidden"}
      >
        <Text fontFamily="font3" id="triggerEffect">
          to
        </Text>
        <Text id="triggerEffect" textTransform="uppercase" fontFamily="font4">
          grow
        </Text>
      </Flex>
      <Flex
        justifyContent={{ base: "center", md: "unset" }}
        gap={{ base: "10px", md: "40px" }}
        overflow="hidden"
      >
        <Text fontFamily="font4" textTransform="uppercase" id="triggerEffect">
          plus plus
        </Text>
      </Flex>
      <Flex
        gap={{ base: "10px", md: "40px" }}
        justifyContent={{ base: "center", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "unset" }}
      >
        <Flex overflow="hidden">
          <Text textTransform="uppercase" fontFamily="font4" id="triggerEffect">
            fast
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent={{ base: "center", md: "unset" }}
          overflow="hidden"
        >
          <Text
            fontSize="20px"
            lineHeight="20px"
            fontFamily="font1"
            textTransform="uppercase"
            textAlign={{ base: "center", md: "unset" }}
            id="triggerEffect"
          >
            thanks to impactful storytelling <br />
            a strong visual identity <br />
            ultra-smooth <br />
            digital interfaces
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page3;
