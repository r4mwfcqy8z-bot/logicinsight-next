import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { Boxes, Cpu, Eye, Settings, Bell, Users, Clock, Server } from "lucide-react";

export const metadata = { title: "Monitoring as a Service" };

const GAP = [
  { icon: <Boxes size={18} />,   name: "Tool sprawl",      body: "Five consoles for one environment turns 30-minute incidents into half-day investigations." },
  { icon: <Cpu size={18} />,     name: "Engineering drain", body: "Senior SREs spend cycles maintaining monitors instead of using them." },
  { icon: <Clock size={18} />,   name: "Coverage gaps",     body: "What gets watched at 3am ends up being whatever the last person remembered to add." },
];

const INCLUDED = [
  { icon: <Server size={18} />,    name: "Appliance deployment + configuration", body: "We stand up Overwatch in your environment and tune it to your clusters, fleet, and integrations." },
  { icon: <Eye size={18} />,       name: "Dashboard design + customization",     body: "Operator-focused dashboards built around the questions your team asks first." },
  { icon: <Bell size={18} />,      name: "Alert tuning + on-call routing",        body: "Per-team escalation, severity normalization, and noise reduction sprints." },
  { icon: <Users size={18} />,     name: "Quarterly posture + capacity reviews",  body: "Sit with leadership four times a year. Bring evidence. Leave with a runway plan." },
  { icon: <Settings size={18} />,  name: "Lifecycle management",                  body: "Patches, upgrades, plugins, integrations — we own it." },
  { icon: <Bell size={18} />,      name: "AI Assistant included",                 body: "Full access to the Infrastructure Copilot. Operator-grade, evidence-grounded." },
];

const TIERS = [
  { name: "Essentials",       sub: "Lean teams",       body: "Business-hours coverage with after-hours escalation. Quarterly reviews. Up to 4 clusters." },
  { name: "Pro",              sub: "Production-critical", body: "24×7 SRE coverage. Monthly reviews. Up to 20 clusters. Custom integrations included." },
  { name: "Enterprise",       sub: "Multi-site / MSP",  body: "Dedicated SRE pod. Multi-tenant Overwatch. Custom RBAC + reporting." },
];

const TIMELINE = [
  { icon: <Boxes size={18} />,     name: "Discovery",  sub: "Week 1",  body: "We learn your environment, integrations, alerting model, and escalation paths." },
  { icon: <Server size={18} />,    name: "Deploy",     sub: "Week 1",  body: "Appliance stood up. All collection engines connected. Baselines start learning." },
  { icon: <Eye size={18} />,       name: "Tune",       sub: "Weeks 2–3", body: "Dashboards customized. Alerts tuned. On-call routing live." },
  { icon: <Bell size={18} />,      name: "Operate",    sub: "Week 4+", body: "We're on-call. You're using the dashboards. Quarterly reviews scheduled." },
];

export default function MaaSPage() {
  return (
    <>
      <PageHead
        eyebrow="Solutions · Monitoring as a Service"
        title={<>Monitoring as a Service —{" "}<span className="serif-italic gradient-text">we run it, you use it.</span></>}
        sub="The appliance, the upgrades, the tuning, the on-call. You get the dashboards and the reviews."
      />

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="The monitoring gap"
            title={<>Where teams quietly{" "}<span className="serif-italic gradient-text">fall behind.</span></>}
          />
          <FeatGrid items={GAP} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="What you get"
            title={<>Operator-grade coverage{" "}<span className="serif-italic gradient-text">without hiring for it.</span></>}
          />
          <FeatGrid items={INCLUDED} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Service tiers"
            title={<>Three coverage models.{" "}<span className="serif-italic gradient-text">Pick the one that fits.</span></>}
          />
          <FeatGrid items={TIERS} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="From zero to full observability"
            title={<>Days, not months.{" "}<span className="serif-italic gradient-text">Here&apos;s the plan.</span></>}
          />
          <FeatGrid items={TIMELINE} cols={4} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
