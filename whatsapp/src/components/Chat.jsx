import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ChatBody } from "./chatComponents/ChatBody";
import { ChatFooter } from "./chatComponents/ChatFooter";
import { ChatHeader } from "./chatComponents/ChatHeader";

export const Chat = () => {
  return <Flex direction={"column"} flex={1} borderLeft={"1px solid lightgray"}>
    
    <ChatHeader></ChatHeader>
    <Divider></Divider>
    <ChatBody></ChatBody>
    <ChatFooter></ChatFooter>
  </Flex>;
};
