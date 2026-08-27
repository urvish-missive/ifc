import { Calculator, ShieldQuestion } from 'lucide-react'

export const tools = [
  {
    slug: 'cover-calculator',
    to: '/tools/cover-calculator',
    name: 'Cover-you-need Calculator',
    icon: Calculator,
    blurb:
      'A quick, indicative starting point for how much health cover to consider — based on your city, family and age.',
  },
  {
    slug: 'emergency-readiness',
    to: '/tools/emergency-readiness',
    name: 'Emergency Readiness Score',
    icon: ShieldQuestion,
    blurb:
      'Six questions to check how ready you are for a hospital day — and where 1FC can help you close the gaps.',
  },
]

export const toolsDisclaimer =
  'These tools are indicative and for guidance only — not financial or insurance advice. Actual cover, eligibility and pricing depend on the insurer’s terms. Talk to a 1FC advisor for a recommendation.'
