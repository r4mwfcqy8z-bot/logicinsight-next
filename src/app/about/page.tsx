import { PageHead } from "@/components/sections/page-head";
import { WhyLogicInsight, FinalCTA } from "@/components/sections/why-and-cta";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="About Logic Insight"
        title={<>We got tired of{" "}<span className="serif-italic gradient-text">the same monitoring problems</span>{" "}you have.</>}
        sub="Five consoles for one environment felt broken. So we built the appliance we wished existed."
      />

      <WhyLogicInsight />

      <section id="contact" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center mb-12">
            <span className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
              Talk to the founders
            </span>
            <h2 className="display-2 mb-4">
              If you&apos;re trying to{" "}
              <span className="serif-italic gradient-text">reduce console sprawl</span>
              <br />
              we should talk.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-[920px] mx-auto">
            <a href="mailto:contact@logicinsight.io" className="group p-6 rounded-3xl glass hover:border-[var(--color-p-400)]/30 transition-colors">
              <Mail className="text-[var(--color-p-300)] mb-3" size={22} />
              <div className="mono-eyebrow text-[var(--color-ink-mute)] mb-2">Email</div>
              <div className="text-[var(--color-p-300)] group-hover:text-[var(--color-p-200)] font-semibold">contact@logicinsight.io</div>
            </a>
            <a href="tel:+14075132359" className="group p-6 rounded-3xl glass hover:border-[var(--color-p-400)]/30 transition-colors">
              <Phone className="text-[var(--color-p-300)] mb-3" size={22} />
              <div className="mono-eyebrow text-[var(--color-ink-mute)] mb-2">Phone</div>
              <div className="text-[var(--color-p-300)] group-hover:text-[var(--color-p-200)] font-semibold">+1 (407) 513-2359</div>
            </a>
            <div className="p-6 rounded-3xl glass">
              <MapPin className="text-[var(--color-p-300)] mb-3" size={22} />
              <div className="mono-eyebrow text-[var(--color-ink-mute)] mb-2">Office</div>
              <div className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                425 W Colonial Dr, Ste 303<br />
                Orlando, FL 32804
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
