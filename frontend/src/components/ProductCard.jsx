import { Box, Heading, HStack, IconButton, Image, Input, Text,VStack } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from './ui/color-mode';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { useProductStore } from '../store/product';
 import { Button } from './ui/button';
 import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = React.useState(product)
    const textColor = useColorModeValue('gray.600', 'grey.200')
    const bg = useColorModeValue('white', 'gray.800')
   const {deleteProduct} =  useProductStore()
    const [open, setOpen] = React.useState(false)
    const handleDeleteProduct = async(id)=>{
        const {success,message} = await deleteProduct(id)
       if(!success){
           console.log(message)
    }
    else{
        console.log(message)
    }
}
const {updateProduct} = useProductStore()
    const handleUpdateProduct = (id,updatedProduct) => async()=>{
        const {success,message} = await updateProduct(id,updatedProduct)
        if(!success){
            console.log(message)
        }
        else{
            console.log(message)
        }
        setOpen(false)

}
  return (
   <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"} transition='all 0.3s' bg={bg} _hover={{transform: 'translateY(-5px)', shadow: 'xl'}}>
     <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"}/>
     <Box p={4}>
        <Heading as={"h3"} Size={"md"} md={2}>{product.name}</Heading>
        <Text fontWeight='bold' fontSize={"xl"} mb={4}  color={textColor}>${product.price}</Text>
        <HStack gap={4}>
        <IconButton icon={<CiEdit/>} onClick={()=>setOpen(true)}  colorPalette='blue'>
                <CiEdit />
        </IconButton>
		<IconButton icon={<MdDelete/>} colorPalette='red' onClick={()=>handleDeleteProduct(product._id)}>
                <MdDelete />
        </IconButton>
        </HStack>
     </Box>

     <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
    
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Product</DialogTitle>
                <DialogCloseTrigger />
              </DialogHeader>
              <DialogBody>
              <VStack spacing={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</VStack>
              </DialogBody>
              <DialogFooter>

                <Button colorPalette='blue' onClick={handleUpdateProduct(product._id,updatedProduct)}>Save</Button>
                <Button variant="ghost" onClick={()=>setOpen(false)}>Cancel</Button>
        </DialogFooter>
            </DialogContent>
          </DialogRoot>


   </Box>
  )
}

export default ProductCard
