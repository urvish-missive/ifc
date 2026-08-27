import React from 'react'

export default function IdeaSection() {
  return (
    <section className="idea" id="idea">
      <div className="wrap">
        <span className="label rv">The idea</span>
        <div className="idea-split">
          <div className="statement rv">
            A policy is a promise. <span className="dim">A case is a commitment.</span>
          </div>
          <div className="rv">
            <p className="lede">
              Aggregators end at checkout. Administrators begin at adjudication. The part in between, where insurance is actually experienced, belongs to nobody. 1FC Insure turns every moment of need into a case with an owner, a checklist, a status and a clock.
            </p>
            <div className="boundary mt-6">
              1FC assists, coordinates and follows up. Coverage decisions, adjudication, approvals and settlement stay with the insurer and TPA under your policy terms. We do not blur that line, we make it navigable.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
