import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { Container, Heading, Box, Text, Link } from '@chakra-ui/react'
import products from '@/public/products.json'
import type { Product } from '@/interfaces/product'

interface Props {
  product?: Product
}
const ProductPage: NextPage<Props> = ({ product }) => {
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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: products.map((e) => `/product/${e.id}`),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const { productId } = context.params ?? {}
  return {
    props: {
      product: products.find((e) => e.id === productId)
    }
  }
}
