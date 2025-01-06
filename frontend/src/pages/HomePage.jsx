
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
  const {fetchProducts,products} = useProductStore()
  useEffect(() => {
          fetchProducts()

  }, [fetchProducts])
  console.log(products)
  return (
   <Container maxW="container.xl" py={12}>
    <VStack gap={8}>
    <Text
            fontSize= {
              {
                lg: "4xl",
                sm: "2xl",
            }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
            bgClip={"text"}
            >
                Current Product
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))}
      </SimpleGrid>
            {products.length === 0 && (
              <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
              No products found 😢{""}
              <Link to={"/create"}>
                <Text as={"spam"}  color='blue.500' _hover={{ textDecoration: "underline" }}>
                  Create a product
                </Text>
              </Link>
        </Text>
            )}
      
       

    </VStack>
   </Container>
  )
}

export default HomePage
