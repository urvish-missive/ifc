import React from 'react'

export default function ServiceSection() {
  return (
    <section className="band light" id="service">
      <div className="wrap">
        <div className="head rv">
          <span className="label">What you get</span>
          <h2>Four things a family actually holds.</h2>
        </div>
        <div className="caplist">
          <div className="caprow rv">
            <div>
              <div className="rt">Customer record</div>
              <h3>One place where your cover actually lives.</h3>
            </div>
            <div>
              <p>
                Policies, family members, contact history and past cases sit in a single customer record, so the team that picks up your call already knows what you hold and what happened last time.
              </p>
            </div>
          </div>
          <div className="caprow rv">
            <div>
              <div className="rt">Case desk</div>
              <h3>Every request becomes a case, not a phone call.</h3>
            </div>
            <div>
              <p>
                A service request, a claim intimation and a hospital coordination call all open the same object, with an owner, a status, a document set and a full history. Nothing lives in a thread only one person can see.
              </p>
              <div className="chipset">
                <span className="chip">named owner</span>
                <span className="chip">live status</span>
                <span className="chip">document checklist</span>
                <span className="chip">turnaround clock</span>
              </div>
            </div>
          </div>
          <div className="caprow rv">
            <div>
              <div className="rt">Hospitalisation</div>
              <h3>Someone on the phone who has done this before.</h3>
            </div>
            <div>
              <p>
                Hospital-facing coordination and documentation support, insurer and TPA follow-up, and ambulance assistance where that service is available under the applicable 1FC service model.
              </p>
            </div>
          </div>
          <div className="caprow rv">
            <div>
              <div className="rt">Renewal</div>
              <h3>Renewal as continuity, not a cold call.</h3>
            </div>
            <div>
              <p>
                Reminders, advice and renewal support from the same relationship, across health, life and general insurance, handled by the people who handled your claim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
