import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdSearch } from "react-icons/md";
import { MdOutlineMoreVert } from "react-icons/md";

export const ChatHeader = () => {
  return (
    <Flex justifyContent={"space-between"} padding={"20px 20px 8px 20px"} bg={"#f4f5f4"} >
      <Flex gap={"20px"}>
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${
            (Math.random() * 1000) | 0
          }.svg`}
        ></Avatar>

        <Box>
          <Heading as="h5" size="md">
            Subhankar Sarkar
          </Heading>
          <Text>Last seen...</Text>
        </Box>
      </Flex>

      <Flex fontSize={"30px"}>
        <Button padding={0} variant="ghost" margin={0} rounded="50%">
          <MdSearch fontSize={"30px"}></MdSearch>
        </Button>
        <Button padding={0} variant="ghost" margin={0} rounded="50%">
          <MdOutlineMoreVert fontSize={"30px"}></MdOutlineMoreVert>
        </Button>
      </Flex>
    </Flex>
  );
};
