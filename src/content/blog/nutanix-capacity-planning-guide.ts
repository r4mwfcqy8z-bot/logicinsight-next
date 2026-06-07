export const article = {
  slug: "nutanix-capacity-planning-guide",
  title: "Nutanix Capacity Planning: The Complete Guide to Runway, Forecasting, and Growth",
  description: "Plan Nutanix capacity with storage runway, compute headroom, memory analysis, and forecasting. Practical methods and real thresholds.",
  category: "Capacity",
  readMin: "5 min",
  art: 1,
  featured: true,
  href: "https://logicinsight.io/blog/nutanix-capacity-planning-guide/",
  contentHtml: `<p>The real failure mode in Nutanix environments is not running out of capacity. It is discovering you need capacity with eight weeks of lead time and only three weeks of runway left. This guide covers what to track, how to calculate runway, and how to stay ahead of growth.</p>
<h2>Why HCI capacity planning is different</h2>
<p>In Nutanix, compute, storage, and memory converge into one purchase decision: the node. You cannot add just storage or just compute. So the most constrained resource determines your timeline, and every purchase delivers resources across all dimensions whether you need them or not. Clusters are also not fungible. A cluster out of memory in one site cannot borrow from an idle cluster elsewhere without migrating workloads, so you need per-cluster visibility, not aggregate numbers.</p>
<h2>Storage runway, the most common constraint</h2>
<p>Start with effective capacity, not raw. RF2 halves usable storage; RF3 reduces it to about a third. Measure growth with weekly or daily deltas, not monthly averages that mask acceleration. Runway in days is remaining effective capacity divided by daily growth. Two clusters at 60% utilization tell very different stories: one growing 2%/week has ~20 weeks of runway; one growing 5%/week has ~8 weeks, possibly already inside your procurement window.</p>
<p>Cluster averages are not enough. Track growth per container, watch SSD-tier utilization on hybrid clusters (performance degrades before total capacity runs out), monitor dedup and compression ratios over time, and watch snapshot accumulation. <a href="/product/predictive-analytics">Predictive analytics</a> surface runway projections before manual checks would catch them.</p>
<h2>Compute headroom, plan for failure not just growth</h2>
<p>The baseline question is N+1: can the cluster absorb one node failing and still meet performance targets? For larger clusters, plan N+2, since a hardware failure can overlap a rolling upgrade. A practical test: simulate removing your busiest node and redistribute its workload. If any surviving node would exceed 80% CPU, you lack adequate headroom. Account for Controller VM overhead too, and reclaim oversized VMs before buying nodes. <a href="/product/cluster-monitoring">Cluster monitoring</a> keeps compute trends visible.</p>
<h2>Memory overcommit, the silent wall</h2>
<p>AHV ballooning makes memory look more flexible than it is. An overcommit ratio above 1.3x means the hypervisor relies on ballooning to function, not just to handle spikes. Watch balloon pressure on critical VMs (databases, app tiers do not tolerate it gracefully), and be careful cutting CVM memory to free capacity, since that directly weakens storage I/O caching. Track overcommit ratio per host, balloon inflation by VM class, and CVM allocation against recommended levels.</p>
<h2>Network and I/O, the forgotten dimension</h2>
<p>Each node's uplinks are shared across workload traffic, CVM-to-CVM replication, backup, live migration, and management. As density grows, east-west traffic grows disproportionately. Rebuild and rebalancing events are especially demanding: rebuild traffic competes with workload I/O on the same uplinks. If peak utilization during those events exceeds 70% of link capacity, growth will push into congestion. <a href="/product/network-flow-analysis">Network flow analysis</a> provides the visibility.</p>
<h2>Build a planning rhythm</h2>
<p><strong>Weekly (15 min):</strong> review storage growth per container, flag any cluster under 90 days of runway, check CVM CPU/memory trends, and identify hot nodes. <strong>Monthly:</strong> generate runway reports per cluster, identify right-sizing candidates, overlay growth against procurement timelines, and run a node-failure simulation. <strong>Quarterly:</strong> map upcoming projects against headroom, evaluate rebalancing to defer purchases, and align budget with finance in cost-and-timing language.</p>
<h2>Common mistakes</h2>
<p>Using cluster averages instead of per-container and per-node metrics. Planning against raw capacity and ignoring RF2/RF3 overhead. Treating overcommit as a free multiplier without watching balloon pressure. Waiting for Prism threshold alerts instead of projecting runway. Not accounting for hardware procurement lead times measured in weeks, not days.</p>
<h2>Make it automatic</h2>
<p>These practices work with spreadsheets at small scale and break down across six or twelve clusters. Overwatch deploys as a single on-prem appliance and provides runway forecasting, growth-trend modeling, and scheduled capacity reports across every cluster, with no cloud dependency and no data leaving your network. Explore <a href="/product/predictive-analytics">predictive analytics</a> or <a href="/free-trial">deploy a free trial</a> to see your runway in minutes.</p>`,
};
