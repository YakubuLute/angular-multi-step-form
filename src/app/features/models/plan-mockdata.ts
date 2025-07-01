import { Plan } from './plan.interface'

export const PlanData: Plan[] = [
  {
    id: '1',
    price: 0,
    description:
      'Good for individuals who are just starting out and simply want the essentials',
    package: [
      'user',
      'Unlimited calendars',
      'Unlimted event types',
      'Workflows',
      'Integrate with your favorite apps',
      'Accept payment via stripe'
    ],
    billing: 'monthly',
    name: 'individuals',
    type: 'individual'
  },
  {
    id: '2',
    price: 0,
    description:
      'Good for individuals who are just starting out and simply want the essentials',
    package: [
      'user',
      'Unlimited calendars',
      'Unlimted event types',
      'Workflows',
      'Integrate with your favorite apps',
      'Accept payment via stripe'
    ],
    billing: 'monthly',
    name: 'individuals',
    type: 'individual'
  },
  {
    id: '3',
    price: 0,
    description:
      'Good for individuals who are just starting out and simply want the essentials',
    package: [
      'user',
      'Unlimited calendars',
      'Unlimted event types',
      'Workflows',
      'Integrate with your favorite apps',
      'Accept payment via stripe'
    ],
    billing: 'yearly',
    name: 'individuals',
    type: 'individual'
  }
]
