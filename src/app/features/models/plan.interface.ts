export interface Plan {
  id: string
  name: string
  price: number
  billing: 'monthly' | 'yearly'
  description?: string
}
