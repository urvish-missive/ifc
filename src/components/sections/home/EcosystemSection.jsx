import React from 'react'

export default function EcosystemSection() {
  return (
    <section className="band" id="ecosystem">
      <div className="wrap">
        <div className="head rv">
          <span className="label">The 1FC group</span>
          <h2>Part of 1FC.</h2>
          <p className="lede mt-4">
            1FC Insure is not a standalone insurance site. It sits inside a wider financial platform and shares its design language, engineering standards and service philosophy with the rest of the group.
          </p>
        </div>
        <div className="eco">
          <div className="enode rv">
            <div className="nm">1FCode</div>
            <div className="ds">The financial operating system the group is built on.</div>
          </div>
          <div className="enode self rv">
            <div className="nm">1FC Insure</div>
            <div className="ds">Insurance broking, distribution and the case desk. You are here.</div>
          </div>
          <div className="enode rv">
            <div className="nm">Shared foundation</div>
            <div className="ds">One platform layer, one security model and one design system across every 1FC product.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
