import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../constants/theme";
import video from "../assets/video-start.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Page2 = () => {
  useGSAP(() => {
    gsap.from("#page2Video", {
      height: "20vh",
      width: "20vw",
      scrollTrigger: {
        start: "top 50%",
        end: "top 0%",
        trigger: "#page2",
        scrub: 2,
      },
    });
  }, []);

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      minHeight={{ base: "50vh", md: "100vh" }}
      background={theme.secondary}
      color={theme.primary}
      fontFamily="font1"
      fontSize={{ base: "30px", md: "35px", lg: "40px" }}
      textTransform="uppercase"
      id="page2"
      paddingInline={{ base: "20px", md: "0px" }}
    >
      <Text>We are the team</Text>
      <Text>we think elastic</Text>
      <Flex display={{ base: "none", md: "flex" }}>
        <video id="page2Video" src={video} autoPlay muted loop></video>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }}>
        <video id="page2Video2" src={video} autoPlay muted loop></video>
      </Flex>
    </Flex>
  );
};

export default Page2;
