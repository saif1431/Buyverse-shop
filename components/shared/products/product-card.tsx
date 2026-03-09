import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
      const imageUrl = product.images?.[0] || '/placeholder-image.png';
      return (
            <Card className="w-full max-w-sm">
                  <CardHeader className="items-center p-0">
                        <Link href={`/product/${product.slug}`}>
                              <Image src={imageUrl} alt={product.name} width={300} height={300} priority />
                        </Link>
                  </CardHeader>
                  <CardContent className="grid gap-4 p-4">
                        <div className="text-xs">{product.brand}</div>
                        <Link href={`/product/${product.slug}`}>
                              <h1 className="text-xs font-medium">{product.name}</h1>
                        </Link>
                        <div className="gap-4 flex-between">
                              <p className="">{product.rating} Stars</p>
                              {
                                    product.stock > 0 ? (
                                          <ProductPrice value={Number(product.price)} />
                                    ) : (
                                          <p className="text-xs text-red-500">Out of Stock</p>
                                    )
                              }

                        </div>

                  </CardContent>
            </Card>
      );
}

export default ProductCard;