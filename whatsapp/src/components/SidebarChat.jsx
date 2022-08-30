import { Avatar, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";


export const SidebarChat = () => {
const [rand,setRand]=useState("");

  useEffect(() => {
  setRand((Math.random()*1000)|0)

  }, []);
  return (
    <Flex   direction="column" gap={"20px"}>
      {/* every contact */}
      {/* __ add new chat */}
      <Flex direction={"column"} _hover={{ bg: "#F0F2F5" }}>
        <Flex alignItems={"center"} padding="15px" gap={"10px"}>
          <Avatar
            src={`https://avatars.dicebear.com/api/avataaars/${rand}.svg`}
          ></Avatar>
          <Box>
            <Heading as="h5" size="md">
              Subhankar Sarkar
            </Heading>
            <Text>Last Message</Text>
          </Box>
        </Flex>
        <Divider></Divider>
      </Flex>

      
    </Flex>
  );
};
