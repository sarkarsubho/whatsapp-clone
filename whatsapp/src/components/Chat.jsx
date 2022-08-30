import { Divider, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { ChatBody } from "./chatComponents/ChatBody";
import { ChatFooter } from "./chatComponents/ChatFooter";
import { ChatHeader } from "./chatComponents/ChatHeader";
import firebase from "firebase";
import { useSelector } from "react-redux";

export const Chat = () => {
  const {id}=useParams();
  const {user}=useSelector(state=>state.auth);
  // console.log(id)
  const [roomName,setRoomName]=useState("");
  const [messages,setMessages]=useState([]);
//footer
const [text, setText] = useState("");

const sendMessage=()=>{
  console.log(text);
  db.collection('rooms').doc(id).collection('messages').add({
    message:text,
    name:user.displayName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setText("");
  }
  console.log(messages);
  useEffect(()=>{
    if(id){
      db.collection('rooms').doc(id).onSnapshot((snapsort)=>{
        setRoomName(snapsort.data().name)
      });
      db.collection('rooms').doc(id).collection("messages").orderBy('timestamp','asc').onSnapshot((snapshot)=>{
        setMessages(snapshot.docs.map((doc)=>
          doc.data()
        ))
      console.log(  snapshot.docs)
      })
    }
  },[id])
  return (
    <Flex direction={"column"} flex={1} borderLeft={"1px solid lightgray"}>
      <ChatHeader roomName={roomName}></ChatHeader>
      <Divider></Divider>
      <ChatBody messages={messages}></ChatBody>
      <ChatFooter id={id} text={text} sendMessage={sendMessage} setText={setText}></ChatFooter>
    </Flex>
  );
};
