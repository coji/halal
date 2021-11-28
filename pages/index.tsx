import type { NextPage } from 'next'
import { Container, Heading } from '@chakra-ui/react'
import ProductListItem from '../components/ProductListItem'
import products from '../public/products.json'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Heading padding="4" color="gray.800" bgColor="gray.50">
        Halal Baby Foods
      </Heading>

      {products.map((e) => (
        <ProductListItem key={e.id} item={e} />
      ))}
    </Container>
  )
}
export default Home
