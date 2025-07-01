export interface Plan {
  id: string | number
  name: string
  type: 'individual' | 'teams' | 'enterprise'
  price: number
  billing: 'monthly' | 'yearly'
  description?: string
  package: Array<string>
}
