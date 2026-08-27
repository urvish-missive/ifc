import React from 'react'

export default function FaqSection() {
  return (
    <section className="band" id="faq">
      <div className="wrap">
        <div className="head rv">
          <span className="label">Questions</span>
          <h2>Reasonable doubts.</h2>
        </div>
        <div className="faq rv">
          <details open>
            <summary>What exactly is 1FC Insure?</summary>
            <p>
              An insurance broking and POSP distribution business with a customer assistance layer built into it. You buy a policy through 1FC, and the same relationship handles service requests, hospitalisation coordination, claim assistance, documentation and renewals afterwards.
            </p>
          </details>
          <details>
            <summary>Is it an insurance company, a broker, or a platform?</summary>
            <p>
              A broker with a service platform behind it. 1FC does not underwrite risk and does not settle claims, because insurers do that. The platform exists so that the assistance we provide is owned, tracked and measurable rather than dependent on who happens to answer the phone.
            </p>
          </details>
          <details>
            <summary>How is this different from an insurance aggregator?</summary>
            <p>
              Aggregators are built to be excellent at the purchase, and their product effectively ends when the policy is issued. 1FC Insure treats the purchase as the beginning. The differentiating work is hospital coordination, document handling, claim follow-up and renewal continuity, with a case record so you can see it happening.
            </p>
          </details>
          <details>
            <summary>Who is it for?</summary>
            <p>
              Households where one adult holds the policies for parents, spouse and children and becomes the family's helpline. It is built for the person coordinating a hospital admission from another city at night. On the partner side, it is built for POSPs and advisors who need a service story, and for hospitals who would rather deal with one accountable counterpart than a different family every time.
            </p>
          </details>
          <details>
            <summary>Can you guarantee my claim gets approved?</summary>
            <p>
              No, and be wary of anyone who says otherwise. Approvals, exclusions, cashless eligibility and settlement are decided by the insurer and TPA under your policy terms. What 1FC takes responsibility for is that your case is complete, submitted properly, followed up and explained to you in plain language.
            </p>
          </details>
          <details>
            <summary>What happens to my documents and health information?</summary>
            <p>
              Documents attach to your case and are visible to the team handling it, under role-based access with audit trails on every action. Consent, retention and privacy controls are defined alongside compliance and legal, and published in full.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
