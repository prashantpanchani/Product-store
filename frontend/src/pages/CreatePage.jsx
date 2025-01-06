import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';
import { Toaster, toaster } from "@/components/ui/toaster"
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    image: '',
  })

  const { createProduct } = useProductStore()
  const handleAddProduct = async() => {
    const {success,message} = await createProduct(newProduct)
    if(!success){
      toaster.create({
        description: message,
          type: "error",
          isClosable : true,
      })
    }
    if(success){
      toaster.create({
        description: message,
          type: "success",
          isClosable : true,
      })
    setNewProduct({name:"",price:"",image:""})
    }
  }
  return <Container maxW={"2xl"}>
    <Toaster />
    <VStack gap={6}>
    <Heading as={'h1'} size={"4xl"} mb={8} textAlign={"center"}>Create New Product</Heading>
    <Box w={"full"} bg={useColorModeValue("white","gray.800")}
        p={6} rounded={"lg"} shadow={"md"} >
          <VStack gap={3} >
            <Input placeholder='Product Name'  name="name" value={newProduct.name} 
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} border={useColorModeValue("1px solid #e2e8f0","1px solid #2d3748")}/> 
    
            <Input placeholder='Product Price'  name="price" type='number' value={newProduct.price} 
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} border={useColorModeValue("1px solid #e2e8f0","1px solid #2d3748")}/>  

            <Input placeholder='Product Image'  name="image" value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} border={useColorModeValue("1px solid #e2e8f0","1px solid #2d3748")}/>

          <Button colorPalette={"blue"} onClick={handleAddProduct}>Add Product</Button>
          </VStack>
        </Box>
    </VStack >
  </Container>
}

export default CreatePage
