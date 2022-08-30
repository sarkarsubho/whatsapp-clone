import React, { useEffect, useState } from "react";
import { RiDonutChartFill } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdOutlineMoreVert } from "react-icons/md";
import { Avatar, Box, Button, Flex, Input } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

import { SidebarChat } from "./SidebarChat";
import { BiFilter } from "react-icons/bi";
import db from "../firebase";
import { useSelector } from "react-redux";

export const Sidebar = () => {
   const [rooms,setRooms]=useState([]);
   const {user}=useSelector(state=>state.auth);
   
   useEffect(()=>{
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot)=>{})
    // Get a list of cities from your database
      db.collection('rooms').onSnapshot(snapshot=>(
        // coming from firebase Database id means the room id
        setRooms(snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data()
        })
        ))
      ))
      //deattached the room when unmount
      return ()=>{
        unsubscribe();
      }

   },[])

  return (
    <Flex direction={"column"} gap={"10px"} width={["40%" ,"40%","40%","25%"]}>
      <Flex justifyContent={"space-between"} padding="15px" bg={"#f4f5f4"}>
        <Avatar src={user?.photoURL}></Avatar>

        <Flex justifyContent={"center"} alignItems={"center"} fontSize="20px">
          <Button padding={0} variant="ghost" margin={0} rounded="50%">
            <RiDonutChartFill fontSize={"25px"} ></RiDonutChartFill>
          </Button>
          <Button padding={0} variant="ghost" rounded="50%">
            <BsFillChatLeftTextFill></BsFillChatLeftTextFill>
          </Button>
          <Button padding={0} variant="ghost" rounded="50%">
            <MdOutlineMoreVert fontSize={"25px"}></MdOutlineMoreVert>
          </Button>
        </Flex>
      </Flex>

      <Flex justifyContent={"space-around"} alignItems={"center"} width={"90%"} margin={"auto"}>
        <Flex
          rounded={"10px"}
          bg={"#F0F2F5"}
          alignItems={"center"}
          padding="0 10px"
          gap={"25px"}
          width="88%"
          margin={"auto"}
        >
          <MdSearch fontSize={"20px"}></MdSearch>
          <Input
            variant="unstyled"
            placeholder="Search or start new chat"
            border={"none"}
            height={"40px"}
          ></Input>
        </Flex>
        <BiFilter flex={1} fontSize={"25px"} ></BiFilter>
      </Flex>

      {/* sideBar Chat overflow={"scroll"} */}
      <Box
        flex={1}
        overflow={"scroll"}
        overflowX={"hidden"}
        background={"white"}
      >
        <SidebarChat addNewChat></SidebarChat>
        {rooms.map((e)=>{
          return <SidebarChat key={e.id} id={e.id} name={e.data.name}></SidebarChat>
        })}
        
        {/* <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat> */}
      </Box>
    </Flex>
  );
};
