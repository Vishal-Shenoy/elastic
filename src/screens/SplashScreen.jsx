import React, { use } from "react";
import theme from "../constants/theme";
import { Flex } from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const SplashScreen = () => {
  useGSAP(() => {
    gsap.to("#splashScreenContainer", {
      height: "0",
      delay: 2,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.to("#splashScreenCenteredImage", {
      y: "-30",
      height: "0",
      delay: 2,
      duration: 0.5,
      ease: "expoScale(0.5,7,none)",
    });
  }, []);

  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      background={theme.primary}
      position="fixed"
      top="0%"
      zIndex="100"
      overflow="hidden"
      id="splashScreenContainer"
    >
      <Flex id="splashScreenCenteredImage" height="300px" width="300px"></Flex>
    </Flex>
  );
};

export default SplashScreen;
