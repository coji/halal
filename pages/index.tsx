import { Container, Heading } from '@chakra-ui/react'
import ProductListItem from '@/components/ProductListItem'
import products from '@/public/products.json'

const Home = () => {
  return (
    <>
      <Heading padding="4" color="gray.600" bgColor="gray.100">
        Halal Baby Foods
      </Heading>

      <Container maxW="container.xl">
        {products.map((e) => (
          <ProductListItem key={e.id} item={e} />
        ))}
      </Container>
    </>
  )
}
export default Home
