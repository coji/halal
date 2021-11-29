import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { Container, Heading, Box, Text, Link, Image } from '@chakra-ui/react'
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
    <>
      <Heading padding="4" color="gray.600" bgColor="gray.100">
        Halal Baby Foods
      </Heading>

      <Container maxW="container.xl">
        <Box>
          <Link href={product.url}>
            <Text>{product.title}</Text>
          </Link>
          <Image src={product.imageUrl} alt="product image" />
          <Text>{product.category}</Text>
          <Text>{product.moonage}</Text>
        </Box>
      </Container>
    </>
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
