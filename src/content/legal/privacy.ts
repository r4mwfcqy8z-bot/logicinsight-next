import type { LegalDoc } from "@/components/legal/legal-page";

export const privacyDoc: LegalDoc = {
  kicker: "Privacy Policy",
  title: "Privacy Policy",
  updated: "Effective February 12, 2026",
  intro:
    "How Logic Insight collects, uses, stores, and protects information across our platform and services.",
  sections: [
    {
      id: "introduction-scope",
      n: "1",
      title: "Introduction & Scope",
      blocks: [
        `Logic Insight, LLC ("Logic Insight," "Company," "we," "our," or "us") is committed to protecting the privacy and security of information collected through our website (logicinsight.io), our observability platform, our Monitoring as a Service (MaaS) offering, our marketplace integrations, and all related services (collectively, the "Services").`,
        `This Privacy Policy describes how we collect, use, disclose, retain, and safeguard information when you:`,
        {
          ul: [
            "Visit our website or marketing pages",
            "Use the Overwatch observability platform (self-hosted or MaaS)",
            "Purchase through third-party marketplaces (e.g., Datadog Marketplace)",
            "Interact with our sales, partner, or support teams",
            "Receive communications from us",
          ],
        },
        {
          note: `This policy does NOT govern customer infrastructure telemetry processed solely under a Master Services Agreement (MSA), Data Processing Addendum (DPA), or other contractual agreement. Such data is governed exclusively by the applicable agreement.`,
        },
        `By using our Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please discontinue use of our Services.`,
      ],
    },
    {
      id: "definitions",
      n: "2",
      title: "Definitions",
      blocks: [
        `To ensure clarity throughout this policy:`,
        {
          dl: [
            ["Personal Information", "means any information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular individual or household."],
            ["Infrastructure Telemetry", "means operational metrics, performance data, system metadata, configuration details, event logs, network flow data, and other machine-generated signals collected from customer infrastructure environments by the Overwatch platform. Infrastructure Telemetry is not Personal Information unless it is combined with or linked to information that identifies an individual."],
            ["Customer Data", "means any data that a customer submits to, stores within, or processes through the Overwatch platform, including Infrastructure Telemetry and any configurations, dashboards, alert rules, or reports created within the platform."],
            ["Processing", "means any operation performed on information, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, dissemination, alignment, restriction, erasure, or destruction."],
          ],
        },
      ],
    },
    {
      id: "information-we-collect",
      n: "3",
      title: "Information We Collect",
      blocks: [
        { h: "3.1 Information You Provide Directly" },
        `When you create an account, request a trial, contact sales, submit a support request, or otherwise interact with us, we may collect:`,
        {
          ul: [
            "Full name",
            "Email address",
            "Phone number",
            "Company name, job title, and department",
            "Billing and payment information (processed by our payment processor; we do not store full payment card details)",
            "Contents of support requests, emails, and other communications with us",
            "Partner or reseller inquiry details",
            "Event registration and webinar attendance information",
            "Feedback, survey responses, and testimonials (with your consent)",
          ],
        },
        { h: "3.2 Platform & Infrastructure Data" },
        `When you use the Overwatch platform (self-hosted or MaaS), the platform collects and processes:`,
        {
          ul: [
            "Infrastructure metrics and performance telemetry (CPU, memory, storage, network utilization)",
            "System metadata and configuration details (cluster names, VM names, host identifiers, software versions)",
            "Event logs and alert data from Nutanix Prism Central, Prism Element, and AHV",
            "Network flow data (IPFIX) including source/destination addresses, ports, and protocols",
            "Backup solution operational data (job status, duration, capacity) from integrated platforms",
            "S3-compatible storage metrics (capacity, access patterns, performance)",
            "Kubernetes (NKE) cluster health, node performance, and pod-level signals",
            "Platform usage data (feature usage, dashboard views, API calls, login timestamps)",
          ],
        },
        {
          note: `Overwatch is purpose-built to process infrastructure and operational telemetry. The platform does NOT inspect, collect, or process application-layer payloads, end-user personal data, file contents, database records, or authentication credentials from monitored systems.`,
        },
        { h: "3.3 Automatically Collected Information" },
        `When you visit our website or use our platform interface, we automatically collect:`,
        {
          ul: [
            "IP address and approximate geographic location",
            "Browser type, version, and language preference",
            "Operating system and device information",
            "Referring URL and exit pages",
            "Pages visited, links clicked, and navigation patterns",
            "Date, time, and duration of visits",
            "Screen resolution and viewport size",
          ],
        },
        { h: "3.4 Information from Third Parties" },
        `We may receive information from:`,
        {
          ul: [
            "Marketplace platforms (Datadog, Grafana) related to your subscription and entitlements",
            "Business partners and resellers who refer you to our services",
            "Publicly available business directories and professional networking platforms (e.g., LinkedIn) for sales outreach purposes",
            "Analytics and advertising partners",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      n: "4",
      title: "How We Use Information",
      blocks: [
        `We use the information we collect for the following purposes:`,
        { h: "Service Delivery & Operations" },
        {
          ul: [
            "Provide, operate, maintain, and improve the Overwatch platform",
            "Deploy and configure the Overwatch appliance in customer environments",
            "Process infrastructure telemetry and generate observability insights",
            "Deliver dashboards, reports, alerts, and recommendations",
            "Provide MaaS management, tuning, and ongoing optimization",
            "Forward enriched telemetry to customer-designated output platforms",
          ],
        },
        { h: "Security & Reliability" },
        {
          ul: [
            "Detect, prevent, and respond to security incidents",
            "Monitor platform health, availability, and performance",
            "Enforce usage policies and rate limits",
            "Conduct vulnerability assessments and security audits",
          ],
        },
        { h: "Communication & Support" },
        {
          ul: [
            "Respond to support requests and inquiries",
            "Send service-related notices (maintenance windows, outages, updates)",
            "Provide onboarding guidance and product documentation",
            "Send marketing communications (with your consent, where required)",
          ],
        },
        { h: "Improvement & Development" },
        {
          ul: [
            "Analyze aggregate usage patterns to improve platform features",
            "Develop new integrations and capabilities",
            "Conduct internal research and benchmarking",
            "Train and improve machine learning models (see Section 5)",
          ],
        },
        { h: "Legal & Compliance" },
        {
          ul: [
            "Comply with applicable laws, regulations, and legal processes",
            "Enforce our Terms of Service and contractual obligations",
            "Protect the rights, property, and safety of Logic Insight, our customers, and the public",
            "Facilitate business transactions (mergers, acquisitions, asset sales)",
          ],
        },
      ],
    },
    {
      id: "machine-learning",
      n: "5",
      title: "Machine Learning & Automated Processing",
      blocks: [
        `Overwatch uses machine learning and automated analysis to:`,
        {
          ul: [
            "Detect anomalies in infrastructure performance and behavior",
            "Identify trends and forecast capacity requirements",
            "Establish baselines for normal operational patterns",
            "Generate health scores and risk assessments",
            "Provide predictive maintenance recommendations",
            "Correlate events across infrastructure layers for root cause analysis",
          ],
        },
        `ML models are trained on infrastructure telemetry and operational metadata only, never on personal content, application data, or end-user information.`,
        `Anomaly detection and predictions are probabilistic. Overwatch presents ML-generated insights as recommendations, not deterministic conclusions. Customers retain full decision-making authority.`,
        `Aggregate, de-identified telemetry patterns may be used to improve ML model accuracy across the platform. No customer-identifiable data is shared between customers or used to train models in a way that could expose one customer's data to another.`,
      ],
    },
    {
      id: "cookies",
      n: "6",
      title: "Cookies & Tracking Technologies",
      blocks: [
        { h: "6.1 Types of Cookies We Use" },
        {
          dl: [
            ["Strictly Necessary Cookies", "Required for website and platform functionality, authentication, and security. These cannot be disabled."],
            ["Functional Cookies", "Remember your preferences, settings, and customizations (e.g., dashboard layouts, timezone preferences)."],
            ["Analytics Cookies", "Help us understand how visitors interact with our website and platform to improve user experience."],
            ["Marketing Cookies", "Used to deliver relevant advertisements and measure campaign effectiveness. These are only placed with your consent where required by law."],
          ],
        },
        { h: "6.2 Your Cookie Choices" },
        `You may control cookies through:`,
        {
          ul: [
            "Your browser settings (blocking or deleting cookies)",
            "Our cookie consent banner (where applicable)",
            "Opt-out mechanisms provided by analytics providers",
          ],
        },
        { note: `Disabling certain cookies may affect website or platform functionality.` },
        { h: "6.3 Do Not Track" },
        `Logic Insight does not currently respond to "Do Not Track" browser signals, as there is no industry-standard interpretation of this signal. We will update this policy if a standard is adopted.`,
      ],
    },
    {
      id: "data-sharing",
      n: "7",
      title: "Data Sharing & Disclosure",
      blocks: [
        `Logic Insight does NOT sell, rent, or trade personal information. Period.`,
        `We may share information with the following categories of recipients:`,
        {
          dl: [
            ["Service Providers", "Trusted third-party vendors who perform services on our behalf (hosting, payment processing, email delivery, analytics, customer support tooling) under written agreements that require them to protect information and use it only for the specified purpose."],
            ["Output Platforms", "When you configure Overwatch to forward telemetry to a third-party platform (Datadog, Grafana, Coralogix, AppDynamics, or others), we transmit your Infrastructure Telemetry to that platform as directed by you. Logic Insight acts as a data processor in this capacity; the third-party platform's own privacy policy governs their handling of that data."],
            ["Referral Partners", "If you were referred to Logic Insight by a partner or reseller, we may share limited account information (name, company, subscription status) with that partner to facilitate the business relationship and support delivery."],
            ["Legal Requirements", "We may disclose information if required to do so by law, regulation, legal process, or governmental request, including to meet national security or law enforcement requirements."],
            ["Business Transfers", "In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, information may be transferred as part of that transaction. We will notify you via email or prominent notice on our website before your information becomes subject to a different privacy policy."],
            ["With Your Consent", "We may share information for any other purpose with your explicit consent."],
            ["Aggregate & De-Identified Data", "We may share aggregate or de-identified data that cannot reasonably be used to identify you for industry benchmarking, research, and marketing purposes."],
          ],
        },
      ],
    },
    {
      id: "third-party",
      n: "8",
      title: "Third-Party Services & Integrations",
      blocks: [
        `The Overwatch platform integrates with third-party services including but not limited to:`,
        {
          dl: [
            ["Output Platforms", "Datadog, Grafana, Coralogix, AppDynamics"],
            ["Notification Channels", "Slack, Microsoft Teams, Email (SMTP), Discord, PagerDuty, custom webhooks"],
            ["Backup Platforms", "Cohesity, Rubrik, HYCU"],
            ["Cloud Providers", "AWS, Microsoft Azure (for NC2 environments)"],
            ["Infrastructure Platforms", "Nutanix Prism Central, Prism Element, AHV"],
          ],
        },
        `When you enable an integration, data flows between Overwatch and the third-party service as configured by you. Logic Insight is not responsible for the privacy practices of third-party services. We encourage you to review the privacy policies of any third-party service you integrate with.`,
      ],
    },
    {
      id: "data-security",
      n: "9",
      title: "Data Security",
      blocks: [
        `Logic Insight implements comprehensive technical and organizational measures to protect information, including:`,
        {
          dl: [
            ["Encryption", "All data encrypted in transit (TLS 1.2+) and at rest (AES-256)."],
            ["Access Controls", "Role-based access control (RBAC), least-privilege access principles, multi-factor authentication for administrative access."],
            ["Network Security", "Network segmentation, firewall policies, intrusion detection, and regular vulnerability scanning."],
            ["Audit Logging", "Comprehensive audit logging of access and administrative actions, with tamper-evident log storage."],
            ["Secure Development", "Secure software development lifecycle (SDLC) practices, including code review, dependency scanning, and security testing."],
            ["Incident Response", "Documented incident response plan with defined roles, communication procedures, and post-incident review processes."],
            ["Vendor Management", "Third-party service providers are evaluated for security practices and bound by contractual data protection obligations."],
            ["Physical Security", "For self-hosted deployments, the Overwatch appliance runs within your own infrastructure under your physical and environmental security controls. For MaaS, Logic Insight's cloud infrastructure is hosted in SOC 2-compliant data centers."],
          ],
        },
        `While we implement commercially reasonable security measures, no system is completely secure. We cannot guarantee the absolute security of information transmitted to or stored by our Services.`,
      ],
    },
    {
      id: "data-retention",
      n: "10",
      title: "Data Retention & Deletion",
      blocks: [
        {
          dl: [
            ["Account Information", "Retained for the duration of your active account or business relationship, plus up to 24 months following termination for legal and operational purposes (e.g., billing records, audit compliance)."],
            ["Infrastructure Telemetry", "Retention is controlled by your configured retention policies within the platform and/or your output platform (Datadog, Grafana, etc.). Logic Insight does not retain a copy of forwarded telemetry beyond the processing window unless specifically configured by the customer."],
            ["MaaS Customer Data", "Retained for the duration of the service agreement. Upon termination, customer data is deleted within 90 days, except where retention is required by law or contractual obligation."],
            ["Website & Marketing Data", "Cookie data is retained according to the cookie type (session cookies expire at browser close; persistent cookies expire per their defined lifetime, typically 12 months or less). Marketing communication records are retained for as long as you remain subscribed."],
            ["Support Communications", "Support tickets and communications are retained for up to 36 months following resolution for quality assurance and reference purposes."],
            ["Right to Deletion", "You may request deletion of your personal information at any time (see Section 12). We will comply within the timeframes required by applicable law, subject to any legal retention obligations."],
          ],
        },
      ],
    },
    {
      id: "international-transfers",
      n: "11",
      title: "International Data Transfers",
      blocks: [
        `Logic Insight is headquartered in Orlando, Florida, United States. If you access our Services from outside the United States, your information may be transferred to, stored, and processed in the United States and other jurisdictions where our service providers operate.`,
        `For transfers of personal data from the European Economic Area (EEA), United Kingdom (UK), or Switzerland to the United States or other countries that have not received an adequacy determination, Logic Insight relies on:`,
        {
          ul: [
            "Standard Contractual Clauses (SCCs) approved by the European Commission",
            "Data Processing Addendums (DPAs) with appropriate safeguards",
            "Other legally recognized transfer mechanisms as applicable",
          ],
        },
        `If you require a Data Processing Addendum or Standard Contractual Clauses, please contact contact@logicinsight.io.`,
      ],
    },
    {
      id: "your-rights",
      n: "12",
      title: "Your Rights & Choices",
      blocks: [
        `Depending on your jurisdiction, you may have the following rights regarding your personal information:`,
        {
          dl: [
            ["Right of Access", "Request a copy of the personal information we hold about you."],
            ["Right to Rectification", "Request correction of inaccurate or incomplete personal information."],
            ["Right to Erasure", "Request deletion of your personal information, subject to legal retention requirements."],
            ["Right to Restrict Processing", "Request that we limit how we use your personal information."],
            ["Right to Data Portability", "Request a copy of your personal information in a structured, commonly used, machine-readable format."],
            ["Right to Object", "Object to processing of your personal information for direct marketing or where processing is based on legitimate interests."],
            ["Right to Withdraw Consent", "Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of prior processing."],
            ["Right to Non-Discrimination", "We will not discriminate against you for exercising any of your privacy rights."],
          ],
        },
        `To exercise any of these rights, contact us at contact@logicinsight.io. We will respond within 30 days (or the timeframe required by applicable law). We may request verification of your identity before fulfilling a request.`,
      ],
    },
    {
      id: "childrens-privacy",
      n: "13",
      title: "Children's Privacy",
      blocks: [
        `Logic Insight Services are designed for business and enterprise use. We do not knowingly collect personal information from children under the age of 16 (or the applicable age of consent in your jurisdiction). If we become aware that we have collected personal information from a child, we will take steps to delete it promptly. If you believe a child has provided personal information to us, please contact us at contact@logicinsight.io.`,
      ],
    },
    {
      id: "ccpa",
      n: "14",
      title: "California Privacy Rights (CCPA/CPRA)",
      blocks: [
        `If you are a California resident, you have the following additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):`,
        {
          dl: [
            ["Right to Know", "You may request that we disclose the categories and specific pieces of personal information collected, the sources of collection, the business purpose for collection, and the categories of third parties with whom we share personal information."],
            ["Right to Delete", "You may request deletion of personal information we have collected, subject to certain exceptions."],
            ["Right to Correct", "You may request correction of inaccurate personal information."],
            ["Right to Opt-Out of Sale or Sharing", "Logic Insight does not sell personal information and does not share personal information for cross-context behavioral advertising purposes."],
            ["Right to Limit Use of Sensitive Personal Information", "Logic Insight does not collect or process sensitive personal information as defined under the CPRA beyond what is necessary to provide our Services."],
          ],
        },
        `To exercise these rights, contact contact@logicinsight.io or call +1-407-513-2359. We will not discriminate against you for exercising your CCPA/CPRA rights.`,
        `In the preceding 12 months, Logic Insight has collected the categories of personal information described in Section 3, has not sold personal information, and has not shared personal information for cross-context behavioral advertising.`,
      ],
    },
    {
      id: "gdpr",
      n: "15",
      title: "European Data Subject Rights (GDPR)",
      blocks: [
        `If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, the following applies:`,
        { h: "Legal Basis for Processing" },
        `We process personal information on the following legal bases:`,
        {
          dl: [
            ["Performance of a Contract", "Processing necessary to provide our Services to you."],
            ["Legitimate Interests", "Processing necessary for our legitimate business interests (platform improvement, security, fraud prevention) where those interests do not override your fundamental rights."],
            ["Consent", "Where you have given explicit consent (e.g., marketing communications)."],
            ["Legal Obligation", "Processing necessary to comply with applicable laws."],
          ],
        },
        { h: "Data Controller" },
        `Logic Insight, LLC is the data controller for personal information collected through our website and for our own business purposes. For Infrastructure Telemetry processed on behalf of customers, Logic Insight acts as a data processor.`,
        { h: "Data Protection Officer" },
        `For GDPR-related inquiries, contact contact@logicinsight.io.`,
        `You have the right to lodge a complaint with your local data protection supervisory authority if you believe our processing of your personal information violates applicable law.`,
      ],
    },
    {
      id: "changes",
      n: "16",
      title: "Changes to This Policy",
      blocks: [
        `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.`,
        `For material changes, we will:`,
        {
          ul: [
            `Update the "Last Updated" and "Effective Date" at the top of this page`,
            "Provide notice via email to registered users (for significant changes)",
            "Post a prominent notice on our website",
          ],
        },
        `We encourage you to review this Privacy Policy periodically. Continued use of our Services after the effective date of a revised policy constitutes acceptance of the updated terms.`,
      ],
    },
    {
      id: "contact",
      n: "17",
      title: "Contact Information",
      blocks: [
        `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:`,
        {
          dl: [
            ["Logic Insight, LLC", "425 W Colonial Dr, Ste 303, Orlando, FL 32804, United States"],
            ["Email", "contact@logicinsight.io"],
            ["Phone", "+1-407-513-2359"],
          ],
        },
        {
          note: `For data subject rights requests, please include "Privacy Request" in your email subject line and provide sufficient information for us to verify your identity and process your request.`,
        },
      ],
    },
  ],
};
