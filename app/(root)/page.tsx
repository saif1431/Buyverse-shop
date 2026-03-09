import ProductList from '@/components/shared/products/product-list'
import { getLatestProducts } from '@/lib/actions/product.action'

async function page() {
  const latestProducts = await getLatestProducts()
  return (
    <div>
      <ProductList data={latestProducts}  />
    </div>
  )
}

export default page