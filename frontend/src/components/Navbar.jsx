import { Container, Flex, Text, } from '@chakra-ui/react'
import {useColorMode} from './ui/color-mode';
import { Link } from 'react-router-dom'
import { Button, } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {


    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Container maxW={"1140px"} px={4}>
    <Flex justifyContent={"space-between"} 
          h={"60px"}    
          alignItems={"center"}
          flexDir={{
            base: "column",
            sm: "row",
          }}>
            <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}

            bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
            bgClip={"text"}
            >
                <Link to={"/"}>Product Store</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button variant={'outline'} colorPalette={'gray'}>
                <CiSquarePlus />
                </Button>
                </Link>
                <Button onClick={toggleColorMode}  variant={'outline'} fontSize="1rem" >
                {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
                </Button>
            </HStack>
          </Flex>
    </Container>  
  )
}

export default Navbar
