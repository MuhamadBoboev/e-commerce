import { Brand } from './brand'
import { Category } from './category'

export interface Product {
  id: number
  name: string
  description: string
  base_price: number
  image: string
  category: Category
  brand: Brand
  slug: string
}
