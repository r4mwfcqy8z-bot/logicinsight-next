export const article = {
  slug: "nutanix-monitoring-checklist",
  title: "Nutanix Monitoring Checklist: What to Monitor from Day One",
  description: "A seven-tier checklist for monitoring Nutanix: cluster and CVM health, storage, compute, network, hardware, backups, alerting, and reporting.",
  category: "Checklists",
  readMin: "4 min",
  art: 4,
  featured: false,
  href: "https://logicinsight.io/blog/nutanix-monitoring-checklist/",
  contentHtml: `<p>Prism exposes hundreds of metrics on day one, which creates a paradox: more visibility than you can use, but no clear picture of what matters now versus in a month. This checklist organizes Nutanix monitoring into seven priority tiers by operational impact. Work through it over your first 30 to 60 days.</p>
<h2>Tier 1, cluster and CVM health (immediately)</h2>
<p>Nothing else matters if the cluster is degraded. Track overall cluster health status, node count and status, and core services (Stargate, Curator, Cerebro, Prism, Zookeeper) all running. Watch storage pool utilization by trend, not point-in-time. For CVMs: CPU with two thresholds (investigate above 65%, escalate above 80%), memory against the recommended minimum, process restarts (should be zero), and storage controller latency, the single best indicator of workload I/O quality. See <a href="/product/cluster-monitoring">cluster monitoring</a>.</p>
<h2>Tier 2, storage path health (week one)</h2>
<p>Per-container IOPS with a read/write split, and latency split by direction (investigate read above 3ms, write above 5ms). Container capacity and growth rate, plus replication factor. Oplog usage and drain rate per CVM, and extent cache hit ratio (investigate below 70%). Rebuild status and progress, protection domain replication lag, and data locality. See the <a href="/blog/nutanix-storage-monitoring-containers-vdisks">storage deep dive</a>.</p>
<h2>Tier 3, compute and memory (week one)</h2>
<p>Per-host CPU with a per-core breakdown (aggregate hides hotspots). CPU ready time per VM, one of the most actionable metrics, investigate above 5% on latency-sensitive VMs. Memory overcommit ratio at the host level, balloon memory per VM (investigate inflation above 30% of allocation), and right-sizing candidates using under 25% of allocated resources.</p>
<h2>Tier 4, network visibility (first month)</h2>
<p>Uplink utilization and error rates (CRC, drops, retransmits) per node. Enable IPFIX or NetFlow for east-west visibility, since most Nutanix traffic is internal. Identify top talkers and correlate with workloads, track DNS query patterns, and watch inter-node replication bandwidth during rebuilds. See <a href="/product/network-flow-analysis">network flow analysis</a>.</p>
<h2>Tier 5, hardware health (first month)</h2>
<p>Use Redfish or IPMI for disk SMART status, thermal events and fan status, and power supply state, and maintain a firmware inventory. Use SNMP for switch interface utilization, port errors, topology changes, and traps. A flapping switch port produces Nutanix-layer symptoms nearly impossible to diagnose from the Nutanix layer alone. See <a href="/product/redfish-monitoring">Redfish monitoring</a> and <a href="/product/snmp-monitoring">SNMP monitoring</a>.</p>
<h2>Tier 6, backup and protection posture</h2>
<p>Monitor HYCU job success and failure rates, RPO adherence against policy, and protection coverage gaps (VMs outside any protection domain, usually newly deployed). Track backup target capacity and growth, plus snapshot age. See <a href="/product/hycu-monitoring">HYCU monitoring</a>.</p>
<h2>Tier 7, alerting and reporting</h2>
<p>Separate CVM alerts from workload alerts, use baselines where supported, and route by severity: page on-call for critical, send investigate-level to a team channel, roll trends into a digest. Build two recurring reports from day one: a weekly ops summary and a monthly capacity report projecting runway from actual growth.</p>
<h2>Putting it to work</h2>
<p>Start with Tier 1 on deployment day, add Tiers 2 and 3 in week one, and build out 4 through 7 over 30 to 60 days. <a href="/">Overwatch</a> covers all seven tiers from a single on-prem appliance. <a href="/product/architecture">See the architecture</a> or <a href="/free-trial">deploy a free trial</a>.</p>`,
};
