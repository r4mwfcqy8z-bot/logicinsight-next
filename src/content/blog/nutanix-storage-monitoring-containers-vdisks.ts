export const article = {
  slug: "nutanix-storage-monitoring-containers-vdisks",
  title: "Nutanix Storage Monitoring Deep Dive",
  description: "Nutanix storage is a distributed system, not a SAN. How to monitor containers, vDisks, oplog, replication, and tier health effectively.",
  category: "Storage",
  readMin: "5 min",
  art: 3,
  featured: false,
  href: "https://logicinsight.io/blog/nutanix-storage-monitoring-containers-vdisks/",
  contentHtml: `<p>Nutanix storage is not a SAN with a management interface. It is a distributed system where every node contributes, every CVM manages local I/O, and data replicates automatically. Most storage problems become visible well before users notice, but in metrics generic dashboards do not emphasize.</p>
<h2>The storage layers</h2>
<p>The <strong>storage pool</strong> is raw aggregate capacity, too broad to explain most symptoms. <strong>Containers</strong> are logical divisions with replication, compression, and dedup policies, the best operational middle ground. <strong>vDisks</strong> are the per-VM granular layer for troubleshooting. The <strong>oplog</strong> is the write buffer that coalesces writes before they flush. The <strong>extent store</strong> is where data lives after flushing, spanning SSD and HDD on hybrid clusters. <strong>Unified cache</strong> is the in-memory read cache on each CVM.</p>
<h2>Container metrics, where problems show up</h2>
<p>If you watch one layer daily, watch containers. Separate IOPS into reads and writes: a 90%-read container makes cache hit ratio critical, a 90%-write container makes oplog health critical. For latency, read above ~3ms points to worsening cache misses (check cache hit ratio and CVM memory), write above ~5ms points to oplog, extent-store, or CVM CPU pressure. Predictable spikes line up with backups or scheduled jobs; unpredictable ones point to CVM health or hardware. Capacity percentage is weak; growth rate and time-based runway matter more. <a href="/product/predictive-analytics">Predictive analytics</a> model trend and baseline together.</p>
<h2>vDisk metrics, for troubleshooting not dashboards</h2>
<p>A few hundred VMs can mean thousands of vDisks, too granular for a daily view. But when one VM is slow you want per-vDisk IOPS, per-vDisk latency, comparison to that vDisk's own baseline, and data locality. Locality matters more than many realize: below about 70% often means the VM moved recently and reads are traversing the network; collapse toward zero changes performance noticeably. Storage troubleshooting in Nutanix is often a placement and locality problem too.</p>
<h2>Replication health, the silent killer</h2>
<p>Data is stored RF2 or RF3 across nodes; a disk or node failure triggers automatic rebuild. That is correct behavior, but it raises operational risk and consumes cluster I/O, so the system can behave worse during healthy recovery. Make that visible. Monitor rebuild status and progress, estimated completion, resync bandwidth, and protection-domain replication lag in DR workflows. If lag grows quietly, your RPO may no longer be real even though the summary looks healthy.</p>
<h2>Oplog, the most misunderstood component</h2>
<p>The oplog coalesces small random writes into larger sequential ones. As usage climbs toward saturation it loses buffering room, and once full it forces bypass behavior, sending writes straight to the extent store and spiking write latency. Drain rate is as important as usage; a weak drain rate means the CVM is struggling or the tier beneath it is too slow. Bypass events are some of the most useful to correlate, since each lines up with real write-latency pain. CVM CPU is the single most important metric here, because the CVM manages the oplog.</p>
<h2>Tier health, SSD versus HDD</h2>
<p>On hybrid clusters, an SSD tier above ~90% puts ILM under pressure to keep the hot working set in place; if it fills, writes spill to slower media and the performance profile changes immediately, an urgent capacity problem. On all-flash, the question shifts to media health: disk wear levels and replacement windows. Tier health is performance posture, not just inventory.</p>
<h2>A layered dashboard</h2>
<p><strong>Cluster health (daily glance):</strong> utilization and runway, active rebuilds, cluster-wide latency, CVM health. <strong>Container detail (weekly):</strong> per-container IOPS, latency, growth, replication factor, dedup savings, top five by latency and by growth. <strong>Diagnostics (troubleshooting):</strong> oplog usage and drain rate per CVM, cache hit ratio, SSD tier utilization, locality for recently moved workloads.</p>
<p>Connecting CVM health, container behavior, vDisk diagnostics, oplog state, replication, and tier posture turns "latency is up" into "write latency is up because oplog bypass increased after CVM CPU rose during a rebuild." Overwatch monitors these signals from one on-prem appliance with ML baselines that learn how your storage normally behaves. See <a href="/product/cluster-monitoring">cluster monitoring</a> or <a href="/free-trial">deploy a free trial</a>.</p>`,
};
