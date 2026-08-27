// Partner audiences. Content grounded in the BRD stakeholder table and the
// competitor landscape white space (distribution + assistance + hospital service).

import { Hospital, ShieldCheck, Briefcase, Building2 } from 'lucide-react'

export const partnersIndex = [
  {
    slug: 'hospitals',
    to: '/partners/hospitals',
    audience: 'For Hospitals',
    icon: Hospital,
    promise: 'Smoother patient journeys, cleaner documentation.',
    line: 'A coordinating partner at the desk — helping patients and their families with insurance paperwork so your teams can focus on care.',
  },
  {
    slug: 'insurers',
    to: '/partners/insurers',
    audience: 'For Insurers / TPAs',
    icon: ShieldCheck,
    promise: 'Cleaner intake. Fewer back-and-forth loops.',
    line: 'Structured documentation and a single coordinating contact — so cases arrive complete and progress with less chasing.',
  },
  {
    slug: 'agents',
    to: '/partners/agents',
    audience: 'For Agents / Brokers',
    icon: Briefcase,
    promise: 'A POSP relationship that actually retains.',
    line: 'Lead with service. Post-sale assistance and renewals keep your customers close — and coming back.',
  },
  {
    slug: 'employers',
    to: '/partners/employers',
    audience: 'For Employers',
    icon: Building2,
    promise: 'Real support for your people, when they need it.',
    line: 'Give your team a dependable point of contact for hospitalisation and claims — beyond a policy document in an inbox.',
  },
]

export const partnerPages = {
  hospitals: {
    audience: 'For Hospitals',
    icon: Hospital,
    hero: {
      eyebrow: 'Partner · Hospitals',
      title: 'A coordinating partner at the insurance desk.',
      sub: 'When a patient is admitted, insurance paperwork should not add to the stress. 1FC works alongside your teams to help patients and families with documentation and claim coordination — so care stays the focus.',
    },
    valueProps: [
      {
        title: 'Support at the desk',
        body: 'A physical and digital service presence that helps patients understand documents, checklists and next steps.',
      },
      {
        title: 'Fewer incomplete files',
        body: 'Document checklists and coordination reduce back-and-forth between patient, hospital, insurer and TPA.',
      },
      {
        title: 'Clear case visibility',
        body: 'Each case has an owner and a status — so nobody is left wondering who to call.',
      },
      {
        title: 'Respectful boundaries',
        body: '1FC assists and coordinates; adjudication and settlement remain with the insurer / TPA.',
      },
    ],
    how: [
      { step: 'Intimation', body: 'A case is created when a patient is admitted or a claim begins.' },
      { step: 'Checklist', body: 'The right documents are identified and collected with the patient and family.' },
      { step: 'Coordination', body: '1FC coordinates between hospital, insurer and TPA and keeps everyone updated.' },
      { step: 'Follow-up', body: 'Status is tracked to closure, with the patient kept informed throughout.' },
    ],
    ctaLine: 'Explore a hospital partnership',
  },
  insurers: {
    audience: 'For Insurers / TPAs',
    icon: ShieldCheck,
    hero: {
      eyebrow: 'Partner · Insurers & TPAs',
      title: 'Cases that arrive complete, and keep moving.',
      sub: 'A single coordinating contact and structured documentation on the customer side — so intake is cleaner, follow-ups are fewer, and the customer experience around your product is better.',
    },
    valueProps: [
      {
        title: 'Structured intake',
        body: 'Document checklists and coordination mean fewer incomplete submissions and re-requests.',
      },
      {
        title: 'One point of contact',
        body: 'A coordinating layer on the customer side reduces fragmented communication.',
      },
      {
        title: 'Better experience, your brand',
        body: 'Assisted service around hospitalisation and claims lifts satisfaction with the underlying policy.',
      },
      {
        title: 'Clear role boundaries',
        body: '1FC facilitates and coordinates — your policy terms, adjudication and settlement remain yours.',
      },
    ],
    how: [
      { step: 'Correct information', body: 'The customer side is organised before it reaches you.' },
      { step: 'Coordination', body: '1FC follows up on documentation gaps and status on the customer’s behalf.' },
      { step: 'Visibility', body: 'Both sides see where a case stands, reducing duplicate queries.' },
      { step: 'Retention', body: 'A better service journey supports persistency and renewals.' },
    ],
    ctaLine: 'Talk to us about integration',
  },
  agents: {
    audience: 'For Agents / Brokers',
    icon: Briefcase,
    hero: {
      eyebrow: 'Partner · Agents & POSP',
      title: 'Lead with service. Keep the relationship.',
      sub: 'Distribution wins the sale; service wins the renewal. 1FC gives POSPs and brokers a post-sale assistance layer — claims, hospital support and renewals — that keeps customers close.',
    },
    valueProps: [
      {
        title: 'Post-sale that retains',
        body: 'Assistance during hospitalisation and claims is what customers remember at renewal.',
      },
      {
        title: 'One relationship, many lines',
        body: 'Serve health, life and general insurance from a single customer relationship.',
      },
      {
        title: 'A reason to refer',
        body: 'Service that shows up in the hard moments earns word-of-mouth.',
      },
      {
        title: 'Renewal orchestration',
        body: 'Reminders and advisory make renewals a conversation, not a scramble.',
      },
    ],
    how: [
      { step: 'Advise', body: 'Help customers choose the right cover with clarity.' },
      { step: 'Onboard', body: 'A unique customer identity and QR access from day one.' },
      { step: 'Assist', body: '1FC supports service requests, hospitalisation and claims.' },
      { step: 'Renew', body: 'Continuity handled — the relationship stays with you.' },
    ],
    ctaLine: 'Partner with 1FC as a POSP',
  },
  employers: {
    audience: 'For Employers',
    icon: Building2,
    hero: {
      eyebrow: 'Partner · Employers',
      title: 'Cover is a document. Support is a relationship.',
      sub: 'Give your people a dependable point of contact for hospitalisation and claims. 1FC adds a human assistance layer around insurance — so a hard day is a little easier.',
    },
    valueProps: [
      {
        title: 'A number that answers',
        body: 'Employees get a clear point of contact for guidance during hospitalisation and claims.',
      },
      {
        title: 'Less HR firefighting',
        body: '1FC coordinates documentation and follow-up, easing the load on your HR team.',
      },
      {
        title: 'Care in hard moments',
        body: 'Hospital-facing assistance and coordination when your people need it most.',
      },
      {
        title: 'Continuity built in',
        body: 'Renewal reminders and advisory keep cover continuous across the year.',
      },
    ],
    how: [
      { step: 'Onboard', body: 'Employees receive a 1FC identity and a simple way to reach assistance.' },
      { step: 'Assist', body: 'Guidance and coordination during hospitalisation and claims.' },
      { step: 'Coordinate', body: '1FC works with hospital, insurer and TPA on documentation and status.' },
      { step: 'Report', body: 'Clear service visibility for your HR and admin teams.' },
    ],
    ctaLine: 'Bring 1FC to your team',
  },
}
