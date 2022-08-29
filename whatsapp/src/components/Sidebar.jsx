import React from "react";
import { RiDonutChartFill } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdOutlineMoreVert } from "react-icons/md";
import { Avatar, Box, Button, Flex, Input } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import styles from "./sidebar.module.css";
import { SidebarChat } from "./SidebarChat";
export const Sidebar = () => {
  return (
    <Flex direction={"column"} gap={"10px"} width="30%" padding={"15px"}>
      <Flex justifyContent={"space-between"} >
        <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"></Avatar>

        <Flex justifyContent={"center"} alignItems={"center"} fontSize="20px">
          <Button padding={0} variant='ghost' margin={0} rounded="50%">
            <RiDonutChartFill fontSize={"25px"}></RiDonutChartFill>
          </Button>
          <Button padding={0} variant='ghost' rounded="50%">
            <BsFillChatLeftTextFill></BsFillChatLeftTextFill>
          </Button>
          <Button padding={0} variant='ghost' rounded="50%">
            <MdOutlineMoreVert fontSize={"25px"}></MdOutlineMoreVert>
          </Button>
        </Flex>
      </Flex>
      <Flex rounded={"10px"} bg={"#F0F2F5"} alignItems={"center"}  padding="0 10px" gap={"25px"}>
        <MdSearch fontSize={"20px"} ></MdSearch>
        <Input variant='unstyled' placeholder="Search or start new chat" border={"none"} height={"40px"}></Input>
      </Flex>
      <SidebarChat></SidebarChat>
    </Flex>
  );
};
