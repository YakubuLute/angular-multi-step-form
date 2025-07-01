export interface Plan {
  id: string | number
  name: 'Individuals' | 'Teams' | 'Enterprise'
  price: number | string
  priceText: string
  priceUnit: string
  billing: 'monthly' | 'yearly' | 'none'
  description: string
  ctaText: string
  features: string[]
  packageDescTitle: string
}
