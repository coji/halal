import type { NextPage } from 'next'
import { Container, Heading, Box, Text, Link } from '@chakra-ui/react'
import ProductListItem from '../../components/ProductListItem'
import products from '../../public/products.json'
import { useRouter } from 'next/router'

const ProductPage: NextPage = () => {
  const router = useRouter()
  const { productId } = router.query

  const product = products.find((e) => e.id === productId)
  if (product === undefined) {
    // 商品がない
    return <Box>not found</Box>
  }

  return (
    <Container maxW="container.xl">
      <Heading padding="4" color="gray.800" bgColor="gray.50">
        Halal Baby Foods
      </Heading>

      <Box>
        <Link href={product.url}>
          <Text>{product.title}</Text>
        </Link>
        <Text>{product.category}</Text>
        <Text>{product.category}</Text>
      </Box>
    </Container>
  )
}
export default ProductPage
