// Product content, sourced from the 1FC Insure Company Story and BRD/SOW drafts.
// No traction numbers are invented — 1FC Insure is pre-launch, so the site
// leads with what is true: the model, the promise and the coverage lines.

import {
  Compass,
  FileSignature,
  IdCard,
  HeartPulse,
  ClipboardList,
  HandHeart,
  RefreshCw,
  ShieldCheck,
  Hospital,
  QrCode,
  Ambulance,
  BellRing,
  Stethoscope,
  Users,
} from 'lucide-react'

// The seven-stage relationship — a real sequence, so it is numbered.
// Hospitalisation and Claim are the "when it matters" moments; the thread
// pulses there because that is where 1FC's value spikes.
export const journeyStages = [
  {
    n: 1,
    phase: 'Before purchase',
    need: 'Understand needs and options',
    role: 'Advisory & distribution',
    icon: Compass,
    pulse: false,
  },
  {
    n: 2,
    phase: 'Purchase',
    need: 'Select and buy the right policy',
    role: 'Sales, onboarding & documentation',
    icon: FileSignature,
    pulse: false,
  },
  {
    n: 3,
    phase: 'After purchase',
    need: 'Access your policy and support',
    role: 'Customer profile, ID & service',
    icon: IdCard,
    pulse: false,
  },
  {
    n: 4,
    phase: 'Hospitalisation',
    need: 'Quick guidance when it matters',
    role: 'Hospital & claims coordination',
    icon: HeartPulse,
    pulse: true,
  },
  {
    n: 5,
    phase: 'Claim',
    need: 'Documentation and status visibility',
    role: 'Assistance, follow-up & tracking',
    icon: ClipboardList,
    pulse: true,
  },
  {
    n: 6,
    phase: 'Post-discharge',
    need: 'Closure and continued support',
    role: 'Case follow-up & service',
    icon: HandHeart,
    pulse: false,
  },
  {
    n: 7,
    phase: 'Renewal',
    need: 'Continuity, without the scramble',
    role: 'Reminders, advisory & renewal support',
    icon: RefreshCw,
    pulse: false,
  },
]

// The 1FC promise — four verbs from the Company Story.
export const promises = [
  {
    title: 'Buy with clarity',
    body: 'Advisory across health, life and general insurance — so you understand what you are buying and why.',
    icon: Compass,
  },
  {
    title: 'Stay supported',
    body: 'A clear point of contact and your own 1FC customer identity, long after the policy is issued.',
    icon: ShieldCheck,
  },
  {
    title: 'Get assistance when it matters',
    body: 'Hospitalisation guidance, document help and claim coordination on the hardest days.',
    icon: HeartPulse,
  },
  {
    title: 'Renew with confidence',
    body: 'Reminders and advisory that keep your cover continuous — no last-minute gaps.',
    icon: RefreshCw,
  },
]

// Why 1FC is different — from the Company Story "Differentiation" section
// and the competitor landscape white space.
export const differentiators = [
  {
    title: 'Service is the proposition',
    body: 'Post-sale support is built in from the start — not an afterthought bolted on when something goes wrong.',
    icon: HandHeart,
  },
  {
    title: 'Present at the hospital',
    body: 'Hospital-facing assistance creates a real service presence — physical and digital — where stress is highest.',
    icon: Hospital,
  },
  {
    title: 'One ID, one access point',
    body: 'A unique customer ID and QR give you a single, simple way to reach assistance and raise a request.',
    icon: QrCode,
  },
  {
    title: 'One relationship, end to end',
    body: 'Sales, claims, renewals and service operate from a single customer relationship — not scattered handoffs.',
    icon: Users,
  },
]

// Core capabilities — from the BRD "1FC Solution" and "Core Product Modules".
export const capabilities = [
  {
    title: 'Advisory & distribution',
    body: 'Health-first, with life and general insurance across the wider broking business.',
    icon: Stethoscope,
  },
  {
    title: 'Your 1FC identity + QR',
    body: 'A unique customer ID and QR-enabled access to assistance and service requests.',
    icon: QrCode,
  },
  {
    title: 'Claims assistance & tracking',
    body: 'Case creation, document checklists and status visibility — coordinating with hospital, insurer and TPA.',
    icon: ClipboardList,
  },
  {
    title: 'Hospital coordination',
    body: 'Documentation and coordination support at the hospital, when it is needed most.',
    icon: Hospital,
  },
  {
    title: 'Ambulance assistance',
    body: 'Ambulance help where the service is available under the applicable 1FC service model.',
    icon: Ambulance,
  },
  {
    title: 'Renewals & reminders',
    body: 'Renewal triggers, advisory and follow-up that keep your relationship — and cover — continuous.',
    icon: BellRing,
  },
]

// Honest, qualitative assurances for the trust strip (no invented metrics).
export const assurances = [
  'Health · Life · General',
  'One customer ID & QR',
  'Hospital-facing assistance',
  'Claims coordination',
  'Renewal support',
  'Service-first, not transaction-first',
]

// The coordinating layer between the customer and the formal ecosystem.
export const ecosystem = {
  center: { label: '1FC Insure', sub: 'Coordinating service layer' },
  left: { label: 'You', sub: 'Customer & family' },
  right: [
    { label: 'Hospital', icon: Hospital },
    { label: 'Insurer', icon: ShieldCheck },
    { label: 'TPA', icon: FileSignature },
  ],
  note: '1FC makes your journey visible to the right team while keeping clear boundaries between assistance and the insurer / TPA’s formal decisions.',
}
