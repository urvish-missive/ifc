import React from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

export default function HomeHero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="label rv">Insurance broking with a case desk</span>
          <h1 className="rv">
            Buying the policy<br />
            is the <span className="em">easy half.</span>
          </h1>
          <p className="lede rv">
            1FC Insure exists for the other half. The 11pm admission, the document list nobody warned you about, the claim that has to be chased, the renewal that arrives as a cold call. One relationship. One case number. One team that answers.
          </p>
          <div className="hero-cta rv">
            <a className="btn btn-primary" href="#access">
              Request early access &rarr;
            </a>
            <a className="btn btn-ghost" href="#desk">
              Watch a case open
            </a>
          </div>
          <div className="hero-meta rv">
            <span>Health, life and general</span>
            <span>Broking and POSP</span>
            <span>Hospital coordination</span>
          </div>
        </div>

        <div className="stage rv">
          <div className="case">
            <div className="case-top">
              <span className="case-id">CASE &middot; 1FC-H-000412</span>
              <span className="pill pill-live">
                <span className="dot" />
                In progress
              </span>
            </div>
            <div className="case-body">
              <div className="crow done">
                <span className="t">23:41</span>
                <span className="m"><i /></span>
                <span className="c">
                  <strong>Assistance requested</strong>
                  <span>Raised by a family member at the admission desk.</span>
                </span>
              </div>
              <div className="crow done">
                <span className="t">23:44</span>
                <span className="m"><i /></span>
                <span className="c">
                  <strong>Case opened, owner assigned</strong>
                  <span>Routed to the health claims desk.</span>
                </span>
              </div>
              <div className="crow now">
                <span className="t">23:52</span>
                <span className="m"><i /></span>
                <span className="c">
                  <strong>Hospital coordination underway</strong>
                  <span>Admission desk contacted, checklist issued to the family.</span>
                </span>
              </div>
            </div>
            <div className="case-foot">
              <span className="owner">
                <span className="avatar">RK</span>
                Owned by a named coordinator
              </span>
            </div>
          </div>

          <span className="mascot mascot-hero float" id="mascotHero">
            <MascotIllustration variant="hero" className="h-[260px] sm:h-[300px]" />
          </span>
        </div>
      </div>
    </section>
  )
}
