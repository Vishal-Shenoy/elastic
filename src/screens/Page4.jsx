import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import theme from "../constants/theme";
import CircularText from "../assets/circularText.svg";
import DownArrow from "../assets/arrowDown.svg";
import VideoPage4 from "../assets/page4One.mp4";
import VideoPage5 from "../assets/thumnail-beev.mp4";
import Creme from "../assets/creme.webp";
const Page4 = () => {
  return (
    <Flex
      height="fit-content"
      width="100vw"
      background={theme.secondary}
      paddingTop="100px"
      paddingInline={{ base: "20px", lg: "30px" }}
      flexDirection="column"
    >
      <Flex
        justifyContent="space-between"
        display={{ base: "none", lg: "flex" }}
      >
        <Flex height="70vh" width="40vw" flexDirection="column">
          <video
            src={VideoPage4}
            autoPlay
            muted
            loop
            id="page4Video"
            className="page4HoverEffect"
          ></video>
          <Text fontFamily="font1" color="#ffffff">
            HEC PARIS IEC
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Digital, Strategic
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Flex position="relative" marginLeft="auto" marginTop="-10vh">
            <img src={CircularText} alt="" />
            <img src={DownArrow} alt="" id="arrowSvg" />
          </Flex>
          <Flex marginTop="30vh" flexDirection="column">
            <Image
              height="40vh"
              width={{ md: "40vw", lg: "30vw" }}
              className="page4HoverEffect"
              src="https://wethinkelastic.com/assets/images/thumbnail-white-coffee-b1aada7092b251dc.webp"
            />
            <Text fontFamily="font1" color="#ffffff">
              WHITE COFFEE
            </Text>
            <Text fontFamily="font1" color="#ffffff">
              Branding, Strategic
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        display={{ base: "none", lg: "flex" }}
      >
        <Flex flexDirection="column">
          <Flex height="40vh" width="30vw">
            <video
              src={VideoPage5}
              autoPlay
              muted
              loop
              id="page4Video"
              className="page4HoverEffect"
            ></video>
          </Flex>
          <Text fontFamily="font1" color="#ffffff">
            BEEV
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Digital, Strategic
          </Text>
        </Flex>

        <Flex marginTop="30vh" flexDirection="column">
          <Image
            height="70vh"
            className="page4HoverEffect"
            width={{ md: "40vw", lg: "50vw" }}
            src="https://wethinkelastic.com/assets/images/thumbnail-peugeot-ac01e927d1befcd7.webp"
          />
          <Text fontFamily="font1" color="#ffffff">
            PEUGEOT
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Strategic
          </Text>
        </Flex>
      </Flex>

      <Flex
        marginTop="100px"
        flexDirection="column"
        marginInline="auto"
        display={{ base: "none", lg: "flex" }}
      >
        <Image
          className="page4HoverEffect"
          height="70vh"
          width={{ md: "70vw", lg: "50vw" }}
          src={Creme}
        />

        <Text fontFamily="font1" color="#ffffff">
          PEUGEOT
        </Text>
        <Text fontFamily="font1" color="#ffffff">
          Branding, Strategic
        </Text>
      </Flex>

      <Flex display={{ base: "flex", lg: "none" }} flexDirection="column">
        <Flex>
          <Flex position="relative" marginInline="auto" marginTop="-10vh">
            <img src={CircularText} alt="" />
            <img src={DownArrow} alt="" id="arrowSvg" />
          </Flex>
        </Flex>
        <Flex height="40vh" width="100%" flexDirection="column" marginTop="5vh">
          <video
            src={VideoPage4}
            autoPlay
            muted
            loop
            id="page4Video"
            className="page4HoverEffect"
          ></video>
          <Text fontFamily="font1" color="#ffffff">
            HEC PARIS IEC
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Digital, Strategic
          </Text>
        </Flex>
        <Flex marginTop="5vh" flexDirection="column">
          <Image
            height="40vh"
            width="100%"
            className="page4HoverEffect"
            src="https://wethinkelastic.com/assets/images/thumbnail-white-coffee-b1aada7092b251dc.webp"
          />
          <Text fontFamily="font1" color="#ffffff">
            WHITE COFFEE
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Strategic
          </Text>
        </Flex>
        <Flex flexDirection="column" marginTop="5vh">
          <Flex height="40vh" width="100%">
            <video
              src={VideoPage5}
              autoPlay
              muted
              loop
              id="page4Video"
              className="page4HoverEffect"
            ></video>
          </Flex>
          <Text fontFamily="font1" color="#ffffff">
            BEEV
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Digital, Strategic
          </Text>
        </Flex>
        <Flex marginTop="5vh" flexDirection="column">
          <Image
            height="40vh"
            className="page4HoverEffect"
            width="100%"
            src="https://wethinkelastic.com/assets/images/thumbnail-peugeot-ac01e927d1befcd7.webp"
          />
          <Text fontFamily="font1" color="#ffffff">
            PEUGEOT
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Strategic
          </Text>
        </Flex>
        <Flex marginTop="5vh" flexDirection="column">
          <Image
            height="40vh"
            className="page4HoverEffect"
            width="100%"
            src={Creme}
          />
          <Text fontFamily="font1" color="#ffffff">
            PEUGEOT
          </Text>
          <Text fontFamily="font1" color="#ffffff">
            Branding, Strategic
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page4;
