export default function Footer() {
  return (
    <footer className="bg-[#061C1E] text-[#9DB4AC]">
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
              <li><a href="#desk" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">The case desk</a></li>
              <li><a href="#service" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">What you get</a></li>
              <li><a href="#reality" className="text-[15px] text-[#CBD8CE] transition-colors hover:text-[#F6F7F1]">The reality</a></li>
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
    </footer>
  )
}
