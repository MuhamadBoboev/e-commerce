import { Product } from '@entities/products'

export function sumTotalValues(
  products: Product[] | null | undefined,
): { base_price: number; discount: number } | null {
  if (products && products.length > 0) {
    const result = products.reduce(
      (accumulator, product) => {
        accumulator.base_price += product.base_price
        accumulator.discount += product.discount
        return accumulator
      },
      { base_price: 0, discount: 0 },
    )
    return result
  } else {
    return { base_price: 0, discount: 0 }
  }
}
