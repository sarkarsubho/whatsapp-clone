import { Avatar, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";


export const SidebarChat = ({addNewChat,name,id}) => {
const [rand,setRand]=useState("");
const createChat=()=>{
  const roomName =prompt("dfsdfsdf");
  if(roomName){
    db.collection('rooms').add({
      name: roomName,
    })
  }

}
  useEffect(() => {
  setRand((Math.random()*1000)|0)

  }, []);
  return !addNewChat?(
    <Link to={`/rooms/${id}`}>
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
              {name}
            </Heading>
            <Text>Last Message</Text>
          </Box>
        </Flex>
        <Divider></Divider>
      </Flex>

      
    </Flex>
    </Link>
  ):(
    <Box  textAlign={"center"} onClick={createChat} cursor={"pointer"} _hover={{ bg: "#F0F2F5" }}>
      <Heading> Add New chat</Heading>
    </Box>
  )
};
