import React, { useState } from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

export default function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    status: 'I have health insurance and have never claimed',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setFormSubmitted(true)
  }

  return (
    <section className="final" id="access">
      <div className="wrap final-in">
        <div className="rv">
          <span className="label">Early access</span>
          <h2 className="mt-5">Join the first release.</h2>
          <p className="lede mt-5 max-w-[42ch]">
            The first group we onboard gets a customer record, a named coordinator and the case desk from day one.
          </p>
          <div className="hero-meta border-t-[color:var(--line-d2)] max-w-[420px]">
            <span>No payment</span>
            <span>No policy required</span>
            <span>Leave any time</span>
          </div>
        </div>

        <div className="formwrap rv">
          <span className="mascot mascot-cta on" id="mascotCta">
            <MascotIllustration variant="cta" className="h-[210px] sm:h-[250px]" />
          </span>

          <div className="formcard">
            {formSubmitted ? (
              <div className="py-8 text-center">
                <h3 className="text-2xl text-[#F6F7F1]">Request Received!</h3>
                <p className="text-[#9DB4AC] mt-3">
                  Thank you, <strong>{formData.name}</strong>. We will reply on WhatsApp at <strong>{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="fld">
                  <label htmlFor="nm">Name</label>
                  <input
                    id="nm"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="two">
                  <div className="fld">
                    <label htmlFor="ph">Mobile or WhatsApp</label>
                    <input
                      id="ph"
                      type="tel"
                      placeholder="+91"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="pc">Pincode</label>
                    <input
                      id="pc"
                      type="text"
                      placeholder="395007"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    />
                  </div>
                </div>

                <div className="fld">
                  <label htmlFor="st">Where are you today?</label>
                  <select
                    id="st"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="I have health insurance and have never claimed">
                      I have health insurance and have never claimed
                    </option>
                    <option value="I have health insurance and a claim went badly">
                      I have health insurance and a claim went badly
                    </option>
                    <option value="I am buying health insurance soon">
                      I am buying health insurance soon
                    </option>
                    <option value="I manage policies for my parents">
                      I manage policies for my parents
                    </option>
                    <option value="I am a POSP, agent, hospital or insurer">
                      I am a POSP, agent, hospital or insurer
                    </option>
                  </select>
                </div>

                <button className="btn btn-primary" type="submit">
                  Request early access
                </button>

                <p className="finenote">
                  We will reply on WhatsApp. Requesting early access does not create an insurance policy, cover or any commitment from 1FC.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
