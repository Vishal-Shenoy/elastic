import React, { useEffect } from "react";
import theme from "../constants/theme";
import { Flex, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
const Navbar = ({ navRef }) => {
  return (
    <Flex
      ref={navRef}
      height="100px"
      width="100vw"
      background={theme.secondary}
      position="fixed"
      top="0%"
      zIndex="99"
      alignItems="center"
      paddingInline="20px"
      justifyContent="space-between"
      transition="ease-in-out .3s"
    >
      <Flex background={theme.primary} height="80px" width="80px">
        <img src={logo} alt="" id="navImage" />
      </Flex>
      <Flex
        gap="100px"
        fontSize="22px"
        color="white"
        display={{ base: "none", md: "flex" }}
        fontFamily="font1"
        id="navLinks"
      >
        <span>Projects</span>
        <span>Expertise</span>
        <span>The Team</span>
        <span>Contact</span>
      </Flex>
      <Flex height="30px" width="30px" display={{ base: "flex", md: "none" }}>
        <img src={menu} alt="" id="navImage" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
