import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Mail, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { contact } from '../data/site'

const roles = ['I’m a customer', 'Hospital', 'Insurer / TPA', 'Agent / Broker', 'Employer']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [role, setRole] = useState(roles[0])

  const onSubmit = (e) => {
    e.preventDefault()
    // Demo only — no data is sent anywhere yet. Wire to a backend/service later.
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Talk to 1FC"
        title="Tell us what you need. We’ll take it from here."
        sub="Whether you’re choosing cover, in the middle of a claim, or exploring a partnership — start the conversation. A real person will follow up."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Form */}
            <div>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-start rounded-[1.5rem] bg-parchment p-8 ring-hair-ink sm:p-10"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-marigold/20 text-marigold-deep">
                      <CheckCircle2 className="h-7 w-7" />
                    </span>
                    <h2 className="mt-5 text-title">Thanks — we’ve got it.</h2>
                    <p className="mt-3 max-w-md text-lg leading-relaxed text-body">
                      A 1FC advisor will reach out shortly. If it’s urgent — like an ongoing
                      hospitalisation — please call us so we can help right away.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button href={contact.phoneHref} variant="pine" size="md">
                        Call now
                      </Button>
                      <Button onClick={() => setSubmitted(false)} variant="ghost" size="md">
                        Send another message
                      </Button>
                    </div>
                    <p className="mt-6 font-mono text-xs text-muted">
                      Note: this is a draft site — the form is a demo and does not submit yet.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={onSubmit}
                    className="rounded-[1.5rem] bg-parchment p-7 ring-hair-ink sm:p-9"
                  >
                    <div className="mb-6">
                      <span className="mb-3 block text-sm font-semibold text-ink">
                        What brings you here?
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {roles.map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setRole(r)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                              role === r
                                ? 'bg-pine text-cream'
                                : 'bg-paper text-body ring-1 ring-inset ring-ink/10 hover:ring-ink/25'
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input label="Your name" name="name" required placeholder="Full name" />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 …"
                      />
                    </div>
                    <div className="mt-5">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="mt-5">
                      <label className="mb-2 block text-sm font-semibold text-ink">
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="A sentence or two is plenty."
                        className="w-full resize-none rounded-xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-marigold"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" showArrow className="mt-7">
                      Send message
                    </Button>
                    <p className="mt-4 text-xs text-muted">
                      We’ll only use your details to respond to this enquiry.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Contact details */}
            <div className="lg:pt-4">
              <h2 className="font-display text-xl font-semibold text-ink">Reach us directly</h2>
              <div className="mt-6 space-y-3">
                <ContactRow icon={Phone} label="Call" value={contact.phone} href={contact.phoneHref} />
                <ContactRow
                  icon={MessageCircle}
                  label="WhatsApp"
                  value={contact.whatsapp}
                  href={contact.whatsappHref}
                />
                <ContactRow icon={Mail} label="Email" value={contact.email} href={contact.emailHref} />
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-pine px-5 py-4 text-cream">
                <Clock className="h-5 w-5 text-marigold" />
                <p className="text-[0.95rem]">{contact.hours}</p>
              </div>

              <p className="mt-6 text-[0.9rem] leading-relaxed text-muted">
                Contact details shown here are placeholders for the draft site and will be updated
                before launch.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

function Input({ label, name, type = 'text', required, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-marigold-deep">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-marigold"
      />
    </div>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl bg-parchment px-5 py-4 ring-hair-ink transition-colors hover:bg-sage-mist/50"
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-pine/8 text-pine">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="flex flex-col">
        <span className="eyebrow text-pine-600">{label}</span>
        <span className="font-display text-lg font-semibold text-ink">{value}</span>
      </span>
    </a>
  )
}
