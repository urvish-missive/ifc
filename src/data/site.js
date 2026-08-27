// Brand-level constants and navigation. Single source of truth for copy that
// repeats across the site (contact details are placeholders for launch).

export const brand = {
  name: '1FC Insure',
  positioning: 'Insurance that stays with you beyond the policy.',
  taglineHi: 'Suraksha hi nahi, sacche saath ka vaada.',
  taglineEn: 'Not just protection — the promise of true support.',
  promiseLine: 'Buy with clarity. Stay supported. Get assistance when it matters. Renew with confidence.',
  pitch:
    '1FC Insure combines insurance distribution with ongoing customer assistance. From choosing a policy to managing service needs, hospitalisation support, claim coordination and renewals — one dependable relationship across the insurance journey.',
}

// Placeholder contact details — swap for real values before launch.
export const contact = {
  phone: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',
  whatsapp: '+91 90000 00000',
  whatsappHref: 'https://wa.me/919000000000',
  email: 'care@1fcinsure.com',
  emailHref: 'mailto:care@1fcinsure.com',
  addressLines: ['1FC Insure', 'India'],
  hours: 'Assistance desk: 8am – 10pm, all days',
}

export const nav = {
  primary: [
    { label: 'How it works', to: '/how-it-works' },
    {
      label: 'Partners',
      to: '/partners',
      children: [
        { label: 'Partners Hub', to: '/partners', blurb: 'How 1FC works with the ecosystem' },
        { label: 'For Hospitals', to: '/partners/hospitals', blurb: 'Smoother patient & claims coordination' },
        { label: 'For Insurers / TPAs', to: '/partners/insurers', blurb: 'Cleaner intake, fewer follow-ups' },
        { label: 'For Agents / Brokers', to: '/partners/agents', blurb: 'A POSP relationship that retains' },
        { label: 'For Employers', to: '/partners/employers', blurb: 'Real support for your people' },
      ],
    },
    { label: 'About', to: '/about' },
    {
      label: 'Tools',
      to: '/tools',
      children: [
        { label: 'Tools Hub', to: '/tools', blurb: 'Simple ways to think about cover' },
        { label: 'Cover-you-need Calculator', to: '/tools/cover-calculator', blurb: 'A starting estimate for health cover' },
        { label: 'Emergency Readiness Score', to: '/tools/emergency-readiness', blurb: 'How ready are you for a hospital day?' },
      ],
    },
  ],
}

// The product boundary line — kept honest, per the BRD.
export const boundaryNote =
  '1FC Insure assists, coordinates and facilitates. Coverage decisions, claim adjudication, approvals, exclusions and settlement remain subject to the applicable insurer / TPA policy terms and regulatory requirements.'
