import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from "../assets/img.png";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} filter={"grayscale(1)"} />
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={-20}
      >
      </Text>
    </Box>
  );
};

export default Home;
