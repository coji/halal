import { Box, Image, Text, Link } from '@chakra-ui/react'
import { Product } from '../interfaces/product'

interface ProductListItemProps {
  item: Product
}
const ProductListItem: React.VFC<ProductListItemProps> = ({ item }) => {
  return (
    <Link key={item.id} href={`/product/${item.id}`}>
      <Box>
        <Image src={item.imageUrl} alt={item.title} />
        <Text>{item.title}</Text>
        <Text>{item.moonage}</Text>
        <Text>{item.category}</Text>
        <Text>{item.price}円</Text>
      </Box>
    </Link>
  )
}
export default ProductListItem
