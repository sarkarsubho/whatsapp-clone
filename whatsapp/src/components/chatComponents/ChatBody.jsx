import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./ChatBody.module.css";

export const ChatBody = ({ messages }) => {

  const {user}=useSelector(state=>state.auth);
  return (
    <Flex
      direction={"column"}
      className={styles.chatBody}
      flex={1}
      gap={"20px"}
    >
       {messages.map((e,i)=>{
        
      return   <Text key={i} className={`${styles.chatMessage} ${(e.name===user.displayName) && styles.chatRecieve}`}>
        <Text as="span" className={styles.chatName}>
          {" "}
         {e.name}
        </Text>
        {e.message}
        <Text as="span" className={styles.timeStamp}>
          {" "}
          {`${new Date().toUTCString()}`}
          {/* {e.timeStamp} */}
        </Text>
      </Text>
    })}
    

    </Flex>
  );
};
