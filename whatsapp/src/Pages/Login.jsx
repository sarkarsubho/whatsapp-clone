import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { loginsuccess } from "../redux/auth/action.types";
import "./login.css"

export const Login = () => {
    const dispatch =useDispatch();
    const login=()=>{
        auth.signInWithPopup(provider).then((res)=>{
            console.log(res);
            dispatch({type:loginsuccess,payload:res.user})
        }).catch((er)=>{
            alert(er.message)
        })
    }
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} gap="30px" className="main">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png"
        alt="what's app Logo"
        
        boxSize="150px"
      ></Image>
      <Heading>Login to Whatsapp</Heading>
      <Button onClick={login} colorScheme={"green"}>Login with Google</Button>
    </Flex>
  );
};
