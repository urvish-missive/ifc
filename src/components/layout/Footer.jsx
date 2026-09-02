export default function Footer() {
  return (
    <footer className="bg-[#061C1E] text-[#9DB4AC] w-full">
      {/* Main footer grid */}
      <div className="mx-auto max-w-[1280px] px-[clamp(22px,5.4vw,80px)] py-[clamp(48px,6vw,80px)]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand column */}
          <div className="max-w-xs">
            <span className="font-display text-[1.6rem] font-bold tracking-tight text-[#F6F7F1]">
              1FC <span className="font-normal">Insure</span>
            </span>
            <p className="mt-5 text-[15px] leading-relaxed text-[#CBD8CE]">
              An insurance broking and customer assistance service. We place the policy, then stay on the file through hospitalisation, claims and renewal.
            </p>
            <p className="mt-4 font-mono text-[12px] leading-relaxed tracking-wide text-[#7A948D]">
              Suraksha hi nahi, sacche saath ka vada.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[.16em] text-[#7A948D]">
              Product
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li><a href="#cover" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Insurance</a></li>
              <li><a href="#claims" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Claims &amp; case desk</a></li>
              <li><a href="#journey" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">How it works</a></li>
              <li><a href="#trust" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Why 1FC Insure</a></li>
              <li><a href="#faq" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Questions</a></li>
            </ul>
          </div>

          {/* Partners column */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[.16em] text-[#7A948D]">
              Partners
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li><a href="#access" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">POSPs and agents</a></li>
              <li><a href="#access" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Hospitals</a></li>
              <li><a href="#access" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Insurers and TPAs</a></li>
              <li><a href="#access" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Employers</a></li>
            </ul>
          </div>

          {/* Regulatory column */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[.16em] text-[#7A948D]">
              Regulatory
            </h3>
            <p className="mt-5 text-[14px] leading-relaxed text-[#9DB4AC]">
              1FC Insure is an insurance distribution and customer assistance service. It is not an insurer and not a third party administrator. Coverage, adjudication, approvals, exclusions and settlement remain subject to the terms and decisions of the applicable insurer and TPA.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              <li><a href="#access" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Grievance redressal</a></li>
              <li><a href="#access" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Privacy policy</a></li>
              <li><a href="#access" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">Terms of use</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-footer: disclaimer, sources, and important information */}
      <div className="mx-auto max-w-[1280px] px-[clamp(22px,5.4vw,80px)]">
        {/* Solicitation + Data Sources (fbottom) */}
        <div className="border-t border-[rgba(246,247,241,0.13)] pt-[30px] pb-[34px] grid grid-cols-[1.7fr_2.3fr] gap-[clamp(26px,3.4vw,56px)] items-start max-[900px]:grid-cols-1 max-[900px]:gap-[26px]">
          <div className="text-[12.4px] text-[#7A948D] leading-[1.7]">
            Insurance is the subject matter of solicitation.<br />
            Please read the sales brochure and policy wording carefully before concluding a sale.
          </div>
          <div>
            <h6 className="font-mono text-[10px] font-medium uppercase tracking-[.17em] text-[#7A948D] mb-3">
              Data sources
            </h6>
            <ul className="list-none font-mono text-[11px] text-[#7A948D] leading-[1.85]">
              <li>IRDAI, Annual Report 2023-24: health claim amounts paid, disallowed, repudiated and outstanding.</li>
              <li>IRDAI, Annual Report 2024-25: grievances recorded on the Bima Bharosa portal.</li>
              <li>IRDAI, Master Circular on Health Insurance Business, 29 May 2024: cashless and discharge authorisation timelines.</li>
            </ul>
          </div>
        </div>

        {/* Important Information (fnotes) */}
        <div className="border-t border-[rgba(246,247,241,0.13)] pt-[28px] pb-[36px]">
          <h6 className="font-mono text-[10px] font-medium uppercase tracking-[.17em] text-[#7A948D] mb-4">
            Important information
          </h6>
          <ul className="list-none grid grid-cols-2 gap-x-[clamp(30px,4vw,72px)] gap-y-3 max-[820px]:grid-cols-1">
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              Every figure quoted on this page is an industry-level statistic drawn from the public sources listed above. None of it describes the performance of 1FC Insure.
            </li>
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              1FC Insure distributes insurance products underwritten by insurers registered with the IRDAI. Cover is granted by the insurer, not by 1FC.
            </li>
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              Nothing on this page is an offer of insurance, a quotation, or advice on a specific product. Suitability depends on an assessment of your needs, health and disclosures.
            </li>
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              Benefits, exclusions, waiting periods, sub-limits and co-payment terms are governed entirely by the policy document issued by the insurer.
            </li>
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              Assistance, hospital coordination and ambulance support are service commitments from 1FC. They are not insurance benefits and do not affect claim eligibility or settlement.
            </li>
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              Service availability varies by location, by hospital and by the applicable 1FC service model, and may change without notice.
            </li>
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              Case records shown on this page are representative illustrations of the service workflow. They are not real customer data.
            </li>
            <li className="text-[12.2px] text-[#7A948D] leading-[1.68] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-[6px] before:h-px before:bg-[#7A948D]">
              Trademarks, product names and regulatory references belong to their respective owners and regulators.
            </li>
          </ul>

        </div>
      </div>

      {/* Copyright line — full width */}
      <div className="border-t border-[rgba(246,247,241,0.13)] px-[clamp(22px,5.4vw,80px)] py-[18px]">
        <div className="text-[12.2px] text-[#7A948D] leading-[1.7]">
          Registration details, grievance escalation and the full schedule of regulatory disclosures are published on the disclosures page. If a concern is not resolved to your satisfaction, it can be escalated to the insurer's grievance officer and then to the IRDAI Bima Bharosa portal or the Insurance Ombudsman. &copy; 2026 1FC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
