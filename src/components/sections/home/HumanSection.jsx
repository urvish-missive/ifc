import React from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

export default function HumanSection() {
  return (
    <section className="human">
      <div className="wrap">
        <div className="humancard rv">
          <div className="figure">
            <span className="glow" aria-hidden="true" />
            <MascotIllustration variant="trust" className="h-[220px] sm:h-[260px] mx-auto" />
          </div>
          <div className="content">
            <span className="label">Human when it matters</span>
            <h2>A person owns your case. It says so on the case.</h2>
            <p className="lede">
              The technology exists so that nothing falls through and every turnaround becomes visible. The part that actually calms a family at midnight is a name, a number and somebody who has done this before.
            </p>
            <div className="assigncard">
              <span className="avatar">RK</span>
              <span>
                <span className="ak">Assigned to</span>
                <span className="av">Health claims desk, named coordinator</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
