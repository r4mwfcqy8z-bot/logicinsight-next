import type { LegalDoc } from "@/components/legal/legal-page";

export const termsDoc: LegalDoc = {
  kicker: "Terms of Use",
  title: "Terms of Use",
  updated: "Last updated February 14, 2026",
  intro:
    "The agreement governing your access to and use of the Overwatch platform, services, APIs, documentation, and support.",
  sections: [
    {
      id: "acceptance",
      n: "1",
      title: "Acceptance of Terms",
      blocks: [
        `These Terms of Use ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and Logic Insight, LLC ("Logic Insight," "we," "us," or "our"), governing your access to and use of the Overwatch platform, including all associated software, services, APIs, documentation, and support (collectively, the "Services").`,
        `By accessing or using the Services, creating an account, or clicking "I agree" or similar acceptance mechanism, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are agreeing on behalf of an organization, you represent and warrant that you have authority to bind that organization to these Terms.`,
        `If you do not agree to these Terms, you may not access or use the Services.`,
      ],
    },
    {
      id: "definitions",
      n: "2",
      title: "Definitions",
      blocks: [
        {
          dl: [
            ["Appliance", "The Overwatch virtual appliance software deployed within the Customer's Nutanix environment for self-hosted deployments."],
            ["Authorized Users", "Individuals authorized by Customer to access and use the Services under Customer's account."],
            ["Customer Data", "All data, configurations, and content submitted by Customer to the Services, including infrastructure telemetry collected by the Appliance from Customer's environment."],
            ["Documentation", "User guides, API references, knowledge base articles, and other technical materials provided by Logic Insight."],
            ["Infrastructure Telemetry", "Performance metrics, health data, network flows, hardware sensor readings, and other operational data collected from Customer's Nutanix environment by the Services."],
            ["License Key", "The unique activation key provided to Customer to enable use of the Services."],
            ["MaaS", "Monitoring as a Service, the fully managed deployment model where Logic Insight hosts, configures, and operates the monitoring infrastructure on behalf of the Customer."],
            ["Output Platforms", "Third-party visualization and analytics platforms to which the Services forward enriched telemetry, including but not limited to Datadog, Grafana, Grafana Cloud, Coralogix, and AppDynamics."],
            ["Overwatch Collection Engine", "The core data collection and processing component of the Overwatch platform."],
            ["Services", "The Overwatch observability platform, including all software, APIs, dashboards, documentation, and support provided under these Terms."],
          ],
        },
      ],
    },
    {
      id: "description-of-services",
      n: "3",
      title: "Description of Services",
      blocks: [
        `Logic Insight provides Overwatch, a purpose-built observability platform for Nutanix infrastructure environments. The Services include:`,
        {
          dl: [
            ["Infrastructure Monitoring", "Collection and analysis of performance metrics from Nutanix Prism Central, Prism Element, AHV hypervisors, hosts, virtual machines, storage containers, volume groups, and associated infrastructure."],
            ["Network Flow Analysis", "Collection and analysis of IPFIX network flow data for service-centric traffic visibility."],
            ["Hardware Monitoring", "Collection of physical hardware health data via Redfish IPMI from supported server platforms including HPE ProLiant, Lenovo ThinkAgile, and Supermicro."],
            ["Operating System Monitoring", "Collection of OS-level metrics from Windows and Linux systems."],
            ["Backup Monitoring", "Monitoring of data protection operations from supported backup solutions."],
            ["ML-Driven Analytics", "Machine learning-based anomaly detection, behavioral baselining, capacity forecasting, and health scoring."],
            ["Predictive Analytics", "Trend analysis and capacity forecasting for infrastructure planning."],
            ["Data Forwarding", "Enrichment and forwarding of telemetry data to Customer's chosen Output Platforms."],
          ],
        },
        `The specific features and capabilities available to Customer depend on the subscription plan and deployment model selected.`,
      ],
    },
    {
      id: "account-registration",
      n: "4",
      title: "Account Registration & Security",
      blocks: [
        `You must create an account to use the Services. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.`,
        `You are responsible for maintaining the confidentiality of your account credentials, License Keys, and API keys. You are responsible for all activities that occur under your account.`,
        `You must immediately notify Logic Insight at contact@logicinsight.io if you become aware of any unauthorized access to or use of your account, credentials, or API keys.`,
        `Logic Insight reserves the right to suspend or terminate accounts that violate these Terms or that show signs of unauthorized access.`,
      ],
    },
    {
      id: "subscription-licensing",
      n: "5",
      title: "Subscription Plans & Licensing",
      blocks: [
        `Logic Insight offers the following deployment and licensing models:`,
        {
          dl: [
            ["Self-Hosted", "Customer deploys the Appliance within their own Nutanix environment. Licensed on a per-core basis based on the total number of physical CPU cores in monitored clusters."],
            ["Monitoring as a Service (MaaS)", "Logic Insight deploys, configures, and manages the monitoring infrastructure on behalf of the Customer. Licensed in tiered plans based on the number of monitored clusters."],
            ["Datadog Marketplace", "Available for purchase through the Datadog Marketplace with billing managed by Datadog."],
          ],
        },
        {
          note: `All Inclusive Licensing: Every Overwatch license includes the complete platform with all available integrations, features, and capabilities. There are no add-on licenses, feature gating, or per-integration fees. When new integrations or features become generally available, they are automatically included in all active licenses at no additional cost.`,
        },
        `License Keys are non-transferable and may only be used by the Customer to whom they are issued. License Keys may not be shared, sublicensed, or distributed.`,
        `Self-hosted licenses are limited to the specific core count purchased. If Customer's monitored environment exceeds the licensed core count, Customer must purchase additional licenses.`,
      ],
    },
    {
      id: "payment-terms",
      n: "6",
      title: "Payment Terms",
      blocks: [
        `Fees for the Services are as set forth in the applicable order form, quote, or pricing page at the time of purchase.`,
        `Unless otherwise specified, fees are billed annually in advance. MaaS subscriptions may be billed monthly or annually as specified in the order form.`,
        `All fees are quoted in United States Dollars (USD) unless otherwise agreed in writing.`,
        `Payments are due within thirty (30) days of invoice date unless otherwise specified.`,
        `Late payments may accrue interest at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.`,
        `All fees are non-refundable except as expressly stated in these Terms or required by applicable law.`,
        `Customer is responsible for all applicable taxes, duties, and levies imposed by governmental authorities. Fees quoted by Logic Insight are exclusive of taxes unless explicitly stated otherwise.`,
      ],
    },
    {
      id: "free-trials",
      n: "7",
      title: "Free Trials",
      blocks: [
        `Logic Insight may offer free trial periods at its discretion. Free trials provide full access to the Services for the specified trial duration.`,
        `At the end of the trial period, access to the Services will be suspended unless Customer purchases a subscription. Customer Data from trial accounts may be deleted thirty (30) days after trial expiration.`,
        `Free trials are provided "as is" without any service level commitments. Logic Insight reserves the right to modify or discontinue free trial offerings at any time.`,
        `Each organization is entitled to one (1) free trial. Attempts to obtain multiple free trials through different accounts or identities may result in termination of all associated accounts.`,
      ],
    },
    {
      id: "permitted-use",
      n: "8",
      title: "Permitted Use",
      blocks: [
        `Customer may use the Services solely for:`,
        {
          ul: [
            "Monitoring and managing Customer's own Nutanix infrastructure environments.",
            "Forwarding enriched telemetry to Customer's own Output Platform accounts.",
            "Providing access to Authorized Users within Customer's organization.",
            "Using Documentation and dashboards for Customer's internal business purposes.",
          ],
        },
      ],
    },
    {
      id: "prohibited-conduct",
      n: "9",
      title: "Prohibited Conduct",
      blocks: [
        `You agree not to:`,
        {
          ul: [
            "Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Appliance or any Logic Insight software, except to the extent expressly permitted by applicable law.",
            "Copy, modify, distribute, sell, sublicense, lease, or create derivative works of the Services or any component thereof.",
            "Share, transfer, or disclose License Keys or API credentials to any third party.",
            "Use the Services to monitor infrastructure not owned or operated by Customer without proper authorization.",
            "Use the Services to develop a competing product or service.",
            "Attempt to bypass, disable, or circumvent any security features, licensing controls, or usage limits of the Services.",
            "Use the Services in any manner that violates applicable law, regulation, or third-party rights.",
            "Introduce malicious code, viruses, or other harmful material through the Services.",
            "Resell, rebrand, or white-label the Services or any output thereof without Logic Insight's prior written consent.",
            "Exceed the licensed core count or cluster count without purchasing additional licenses.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      n: "10",
      title: "Intellectual Property",
      blocks: [
        `Logic Insight retains all right, title, and interest in and to the Services, including all software, algorithms, machine learning models, dashboards, documentation, trademarks, trade secrets, and other intellectual property. These Terms do not grant Customer any ownership rights in the Services.`,
        `Customer retains all right, title, and interest in Customer Data. Logic Insight does not claim ownership of any Customer Data.`,
        `Customer grants Logic Insight a limited, non-exclusive license to process Customer Data solely for the purpose of providing the Services.`,
        `Logic Insight may use anonymized, aggregated data derived from the operation of the Services (that does not identify Customer or any individual) to improve the Services, develop ML models, conduct research, and generate benchmarks. Such aggregated data will not include any information that can be used to identify Customer or Customer's infrastructure.`,
        `The "Logic Insight," "Overwatch," and "Logic Insight Pro" names, logos, and associated branding are trademarks of Logic Insight, LLC. Customer may not use these marks without prior written consent.`,
      ],
    },
    {
      id: "customer-data",
      n: "11",
      title: "Customer Data & Data Ownership",
      blocks: [
        {
          dl: [
            ["Customer Data Ownership", "Customer retains full ownership of all Customer Data at all times. Logic Insight processes Customer Data solely as a service provider acting on Customer's behalf."],
            ["Data Processing", "For self-hosted deployments, Infrastructure Telemetry is collected and processed within Customer's own environment by the Appliance. Logic Insight does not have access to Customer's Infrastructure Telemetry in self-hosted deployments except when required for technical support with Customer's explicit consent."],
            ["MaaS Data Processing", "For MaaS deployments, Logic Insight processes Infrastructure Telemetry on managed infrastructure to provide the Services. Logic Insight handles this data in accordance with our Privacy Policy and applicable data protection laws."],
            ["Data Portability", "Customer may export their data at any time during the subscription term. Upon termination, Customer will have thirty (30) days to export their data before it is deleted."],
            ["Data Deletion", "Upon written request, Logic Insight will delete Customer Data from its systems within thirty (30) days, subject to any legal retention requirements."],
          ],
        },
      ],
    },
    {
      id: "service-level",
      n: "12",
      title: "Service Level & Availability",
      blocks: [
        `Logic Insight will use commercially reasonable efforts to maintain the availability of the Services. Specific service level commitments, if any, will be set forth in a separate Service Level Agreement ("SLA") attached to Customer's order form.`,
        {
          dl: [
            ["Self-Hosted Availability", "For self-hosted deployments, the availability of the Appliance depends on Customer's own infrastructure. Logic Insight is not responsible for downtime caused by Customer's hardware, network, hypervisor, or environmental issues."],
            ["MaaS Availability", "For MaaS deployments, Logic Insight is responsible for the availability of the managed monitoring infrastructure. Planned maintenance windows will be communicated at least 48 hours in advance."],
          ],
        },
        `The Services may be temporarily unavailable due to scheduled maintenance, updates, or circumstances beyond Logic Insight's reasonable control. Logic Insight will endeavor to minimize disruption and provide advance notice of planned maintenance.`,
      ],
    },
    {
      id: "third-party-integrations",
      n: "13",
      title: "Third-Party Integrations",
      blocks: [
        `The Services integrate with third-party Output Platforms (Datadog, Grafana, Grafana Cloud, Coralogix, AppDynamics, and others) and infrastructure platforms (Nutanix, HYCU, and others). These third-party services are governed by their own terms of service and privacy policies.`,
        `Logic Insight is not responsible for the availability, performance, accuracy, or security of third-party services. Changes to third-party APIs or services may temporarily affect the functionality of Overwatch integrations.`,
        `Customer is responsible for maintaining valid accounts and credentials with any third-party services used in conjunction with the Services.`,
        `Datadog Marketplace purchases are subject to Datadog's Marketplace terms in addition to these Terms. In the event of a conflict between these Terms and Datadog Marketplace terms regarding billing or marketplace-specific provisions, the Datadog Marketplace terms will govern for marketplace-purchased subscriptions.`,
      ],
    },
    {
      id: "confidentiality",
      n: "14",
      title: "Confidentiality",
      blocks: [
        `"Confidential Information" means any non-public information disclosed by either party to the other in connection with these Terms, including but not limited to business plans, technical data, infrastructure configurations, API keys, pricing, and Customer Data.`,
        `Each party agrees to: (a) protect the other party's Confidential Information using the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care; (b) use Confidential Information only for purposes of performing under or exercising rights under these Terms; and (c) not disclose Confidential Information to any third party except as necessary to perform under these Terms, and only under obligations of confidentiality.`,
        `Confidential Information excludes information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was known to the receiving party before disclosure; (c) is independently developed by the receiving party without use of the disclosing party's Confidential Information; or (d) is rightfully received from a third party without restriction.`,
        `A party may disclose Confidential Information if required by law, regulation, or court order, provided that the disclosing party gives reasonable prior notice to the other party (to the extent legally permitted) and cooperates in any efforts to limit the scope of disclosure.`,
      ],
    },
    {
      id: "disclaimers",
      n: "15",
      title: "Disclaimers",
      blocks: [
        `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LOGIC INSIGHT DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.`,
        `Logic Insight does not warrant that: (a) the Services will be uninterrupted, error-free, or completely secure; (b) ML predictions, anomaly detection, or capacity forecasts will be accurate or complete; (c) the Services will detect all infrastructure issues or prevent all incidents; or (d) the Services will be compatible with all hardware, software, or configurations in Customer's environment.`,
        `Any recommendations, predictions, or insights generated by the Services, including ML-driven analytics, are informational only and should not be relied upon as the sole basis for infrastructure decisions. Customer is responsible for validating and acting upon any information provided by the Services.`,
      ],
    },
    {
      id: "limitation-of-liability",
      n: "16",
      title: "Limitation of Liability",
      blocks: [
        `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LOGIC INSIGHT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS INTERRUPTION, OR COST OF SUBSTITUTE SERVICES, REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY, EVEN IF LOGIC INSIGHT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
        `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LOGIC INSIGHT'S TOTAL AGGREGATE LIABILITY UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY CUSTOMER TO LOGIC INSIGHT DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.`,
        `The limitations in this section apply regardless of whether the claim is based on contract, tort (including negligence), strict liability, or any other legal theory.`,
        `Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability. In such jurisdictions, Logic Insight's liability shall be limited to the maximum extent permitted by applicable law.`,
      ],
    },
    {
      id: "indemnification",
      n: "17",
      title: "Indemnification",
      blocks: [
        `Customer agrees to indemnify, defend, and hold harmless Logic Insight, its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) Customer's use of the Services in violation of these Terms; (b) Customer's violation of applicable law; or (c) any third-party claim arising from Customer's Customer Data.`,
        `Logic Insight agrees to indemnify, defend, and hold harmless Customer from and against any third-party claims alleging that the Services, as provided by Logic Insight, infringe any third-party intellectual property right, provided that: (a) Customer promptly notifies Logic Insight of such claim; (b) Logic Insight has sole control of the defense and settlement; and (c) Customer provides reasonable cooperation.`,
      ],
    },
    {
      id: "term-termination",
      n: "18",
      title: "Term & Termination",
      blocks: [
        `These Terms are effective as of the date you first access or use the Services and continue until terminated.`,
        `Subscription terms are as specified in the applicable order form. Unless otherwise stated, subscriptions automatically renew for successive periods of the same length unless either party provides written notice of non-renewal at least thirty (30) days before the end of the then-current term.`,
        `Either party may terminate these Terms immediately upon written notice if the other party: (a) materially breaches these Terms and fails to cure such breach within thirty (30) days of written notice; or (b) becomes the subject of a bankruptcy, insolvency, receivership, or similar proceeding.`,
        `Logic Insight may suspend or terminate Customer's access to the Services immediately and without notice if: (a) Customer fails to pay fees when due; (b) Customer's use poses a security risk to the Services or other customers; or (c) Customer's use violates applicable law.`,
        `Customer may terminate at any time by providing written notice to contact@logicinsight.io. Termination does not entitle Customer to a refund of prepaid fees unless otherwise required by applicable law.`,
      ],
    },
    {
      id: "effect-of-termination",
      n: "19",
      title: "Effect of Termination",
      blocks: [
        `Upon termination: (a) Customer's right to access and use the Services will immediately cease; (b) Customer must uninstall and destroy all copies of the Appliance software; (c) all License Keys will be deactivated.`,
        `Customer will have thirty (30) days following termination to export Customer Data. After this period, Logic Insight may delete Customer Data in accordance with our Privacy Policy.`,
        `The following sections survive termination: Definitions, Intellectual Property, Customer Data & Data Ownership, Confidentiality, Disclaimers, Limitation of Liability, Indemnification, Effect of Termination, Governing Law & Dispute Resolution, and General Provisions.`,
        `Termination does not relieve Customer of any obligation to pay fees incurred before the termination date.`,
      ],
    },
    {
      id: "modifications-to-terms",
      n: "20",
      title: "Modifications to Terms",
      blocks: [
        `Logic Insight reserves the right to modify these Terms at any time. Material changes will be communicated to Customer by email or through the Services at least thirty (30) days before taking effect.`,
        `Continued use of the Services after the effective date of modified Terms constitutes acceptance of the modified Terms.`,
        `If Customer does not agree to modified Terms, Customer may terminate their subscription before the effective date of the changes.`,
      ],
    },
    {
      id: "modifications-to-services",
      n: "21",
      title: "Modifications to Services",
      blocks: [
        `Logic Insight continuously improves the Services and may add, modify, or remove features at any time. We will endeavor to provide advance notice of material changes that may affect Customer's use.`,
        `Logic Insight will not materially reduce the core functionality of the Services during an active subscription term without providing reasonable alternatives or adjustments.`,
      ],
    },
    {
      id: "governing-law",
      n: "22",
      title: "Governing Law & Dispute Resolution",
      blocks: [
        `These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.`,
        `Any dispute, claim, or controversy arising out of or relating to these Terms shall first be attempted to be resolved through good faith negotiations between the parties for a period of thirty (30) days.`,
        `If negotiations fail, disputes shall be resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. Arbitration shall take place in Orlando, Florida. The arbitrator's award shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.`,
        `Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property rights or Confidential Information.`,
        `These Terms shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods.`,
      ],
    },
    {
      id: "export-compliance",
      n: "23",
      title: "Export Compliance",
      blocks: [
        `Customer agrees to comply with all applicable export control laws and regulations, including United States Export Administration Regulations (EAR) and any applicable sanctions programs administered by the Office of Foreign Assets Control (OFAC).`,
        `Customer represents and warrants that it is not located in, and will not use the Services from, any country or region subject to comprehensive US sanctions, and is not on any US government restricted party list.`,
      ],
    },
    {
      id: "force-majeure",
      n: "24",
      title: "Force Majeure",
      blocks: [
        `Neither party shall be liable for any delay or failure to perform its obligations under these Terms due to causes beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, pandemic, epidemic, government actions, power outages, internet disruptions, or third-party service provider failures. The affected party will use commercially reasonable efforts to mitigate the impact and resume performance as soon as practicable.`,
      ],
    },
    {
      id: "general-provisions",
      n: "25",
      title: "General Provisions",
      blocks: [
        {
          dl: [
            ["Entire Agreement", "These Terms, together with the Privacy Policy and any applicable order forms, constitute the entire agreement between the parties and supersede all prior agreements, understandings, and communications."],
            ["Severability", "If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect."],
            ["Waiver", "No failure or delay by either party in exercising any right under these Terms shall constitute a waiver of that right."],
            ["Assignment", "Customer may not assign or transfer these Terms or any rights hereunder without Logic Insight's prior written consent. Logic Insight may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets."],
            ["Independent Contractors", "The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship."],
            ["Notices", "All notices under these Terms must be in writing and sent to the addresses specified in the Contact Information section. Notices are deemed received upon delivery (if hand-delivered), upon receipt (if sent by email), or three (3) business days after mailing (if sent by certified mail)."],
            ["Headings", "Section headings are for convenience only and do not affect the interpretation of these Terms."],
          ],
        },
      ],
    },
    {
      id: "contact",
      n: "26",
      title: "Contact Information",
      blocks: [
        `If you have questions about these Terms of Use, contact us:`,
        {
          dl: [
            ["Logic Insight, LLC", "425 W Colonial Dr, Ste 303, Orlando, FL 32804"],
            ["Legal inquiries", "contact@logicinsight.io"],
          ],
        },
        {
          note: `These Terms of Use were last updated on February 14, 2026. We recommend that you review these Terms periodically.`,
        },
        {
          note: `These terms are provided as a framework and should be reviewed by a qualified attorney before relying upon them in any legal capacity.`,
        },
      ],
    },
  ],
};
