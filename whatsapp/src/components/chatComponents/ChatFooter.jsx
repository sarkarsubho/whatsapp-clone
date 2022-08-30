import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { BsFillMicFill } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import db from "../../firebase";


export const ChatFooter = ({id,setText,sendMessage,text}) => {
  
  

  
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={"15px"}
      padding={"15px"}
      
      bg={"#f4f5f4"}
    >
      <Button padding={0} variant="ghost" margin={0} rounded="50%">
        <MdInsertEmoticon color="#54656F" fontSize={"30px"}></MdInsertEmoticon>
      </Button>

      <Button padding={0} variant="ghost" margin={0} rounded="50%">
        <ImAttachment color="#54656F" fontSize={"22px"}></ImAttachment>
      </Button>

      <Input
        variant="unstyled"
        placeholder="Type a message"
        border={"none"}
        height={"40px"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        bg={"white"}
        paddingLeft={"20px"}
      ></Input>
      {text ? (
        <Button padding={0} variant="ghost" margin={0} rounded="50%">
          <IoSendSharp onClick={sendMessage} color="#54656F" fontSize={"26px"}></IoSendSharp>
        </Button>
      ) : (
        <Button padding={0} variant="ghost" margin={0} rounded="50%">
          <BsFillMicFill color="#54656F" fontSize={"22px"}></BsFillMicFill>
        </Button>
      )}
    </Flex>
  );
};
