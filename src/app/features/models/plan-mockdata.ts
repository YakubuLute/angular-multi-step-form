import { Plan } from './plan.interface'

export const planData: Plan[] = [
  {
    id: '1',
    name: 'Individuals',
    price: 0,
    priceText: '$0',
    priceUnit: 'per month/user',
    billing: 'none',
    description:
      'Good for individuals who are just starting out and simply want the essentials.',
    ctaText: 'Get started',
    features: [
      '1 user',
      'Unlimited calendars',
      'Unlimited event types',
      'Workflows',
      'Integrate with your favorite apps',
      'Accept payments via Stripe'
    ],
    packageDescTitle: 'Free, forever'
  },
  {
    id: '2',
    name: 'Teams',
    price: 12,
    priceText: '$12',
    priceUnit: 'per month/user',
    billing: 'monthly',
    description:
      'Highly recommended for small teams who seek to upgrade their time & perform.',
    ctaText: 'Get started',
    features: [
      '1 team',
      'Schedule meetings as a team',
      'Round-Robin, Fixed Round-Robin',
      'Collective Events',
      'Advanced Routing Forms',
      'Team Workflows'
    ],
    packageDescTitle: 'Free plan features, plus:'
  },
  {
    id: '3',
    name: 'Enterprise',
    price: '15k',
    priceText: '$15k',
    priceUnit: 'per year',
    billing: 'yearly',
    description:
      'Robust scheduling for larger teams looking to have more control, privacy & security.',
    ctaText: 'Contact us',
    features: [
      '1 parent team and unlimited sub-teams',
      'Organization workflows',
      'Insights - analyze your booking data',
      'Active directory sync',
      '24/7 Email, Chat and Phone support',
      'Sync your HRIS tools'
    ],
    packageDescTitle: 'Organization plan features, plus:'
  }
]
