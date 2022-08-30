import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./ChatBody.module.css";

export const ChatBody = () => {
  return (
    <Flex direction={"column"} className={styles.chatBody} flex={1} gap={"20px"}>

      <Text className={`${styles.chatMessage} ${true && styles.chatRecieve}`}>
        <Text as="span" className={styles.chatName}>
          {" "}
          Sender Name
        </Text>
        Hey guyes !
        <Text as="span" className={styles.timeStamp}>
          {" "}
          3.40 pm
        </Text>
      </Text>

      <Text className={styles.chatMessage}>
        <Text as="span" className={styles.chatName}>
          {" "}
          Sender Name
        </Text>
        Hey guyes !
        <Text as="span" className={styles.timeStamp}>
          {" "}
          3.40 pm
        </Text>
      </Text>
    </Flex>
  );
};
