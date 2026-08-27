import React from 'react'

export default function TrustSection() {
  return (
    <section className="band" id="trust">
      <div className="wrap">
        <div className="head rv">
          <span className="label">Why 1FC Insure</span>
          <h2>Built to be accountable for the part that is usually nobody's job.</h2>
        </div>
        <div className="pillars">
          <div className="pil rv">
            <h4>Built on 1FC infrastructure</h4>
            <p>
              1FC Insure shares engineering standards, design language and platform thinking with 1FCode, the group's financial operating system. It is not a brochure with a contact form behind it.
            </p>
          </div>
          <div className="pil rv">
            <h4>One relationship, whole lifecycle</h4>
            <p>
              Advisory, distribution, operations, claims, hospital coordination and renewals work from one customer record, so you never have to explain your situation twice.
            </p>
          </div>
          <div className="pil rv">
            <h4>Clear about where our role ends</h4>
            <p>
              We assist and coordinate. We do not underwrite risk and we do not adjudicate claims. The case marks the exact point a decision passes to the insurer, and keeps tracking it.
            </p>
          </div>
          <div className="pil rv">
            <h4>Secure by design</h4>
            <p>
              Role-based access and audit trails across every team, with consent and privacy controls defined alongside compliance and legal rather than added afterwards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
