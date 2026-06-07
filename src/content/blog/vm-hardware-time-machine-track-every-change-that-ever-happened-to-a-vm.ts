export const article = {
  slug: "vm-hardware-time-machine-track-every-change-that-ever-happened-to-a-vm",
  title: "VM Hardware Time Machine: Track Every Change That Ever Happened to a VM",
  description: "Track every VM hardware and configuration change over time with a time-travel slider that shows exactly what changed and when.",
  category: "Workloads",
  readMin: "4 min",
  art: 1,
  featured: false,
  href: "https://logicinsight.io/blog/vm-hardware-time-machine-track-every-change-that-ever-happened-to-a-vm/",
  contentHtml: `<p>When a VM starts misbehaving, the first question is always the same: what changed? The answer is rarely in the alert. It is buried in configuration changes, host migrations, and resource adjustments that happened hours or days earlier. Most tools show you the symptom. Overwatch shows you the history that caused it, through the VM Hardware Time Machine.</p>
<h2>The problem with point-in-time monitoring</h2>
<p>Traditional monitoring captures what a VM looks like right now: CPU high, memory pressured, latency up. But the root cause is usually a change, someone doubled the vCPUs last Tuesday, the VM migrated to a host with a different CPU generation, a disk pushed the storage controller past its ceiling, or a protection-domain change altered snapshot behavior. Without change history over time, you are investigating symptoms without evidence.</p>
<h2>What it tracks</h2>
<p>Overwatch continuously records the full hardware and configuration profile of every VM across every cluster, detecting ten categories of change automatically: cluster migration, host migration (every vMotion or HA event with source and destination), power state changes, IP address changes, vCPU changes, memory changes, disk capacity changes, disk count changes (tracked by UUID to distinguish real changes from reattachments), NIC changes, and category or tag changes. No agent, no change-management integration, no manual tagging.</p>
<h2>How the time-travel slider works</h2>
<p>A timeline slider controls the entire view. Drag it to any point in the past and every panel updates to that moment. The <strong>Fleet Changes Overview</strong> summarizes all detected changes grouped by category. <strong>Performance metrics</strong> show sparklines for CPU, memory, ready time, IOPS, bandwidth, and latency synchronized with the slider, so you can see exactly how performance shifted after a migration. The <strong>host CPU chart</strong> clips each host's data to the period the VM ran there, with red dividers marking migrations. <strong>Events and alerts</strong> from logs show Prism events, flow events, and analysis alerts in the selected window, with recurring events collapsed by count.</p>
<h2>Deleted VM history</h2>
<p>Most platforms forget a VM the moment it is deleted. Overwatch preserves it: the system compares current inventories against historical range data, flags VMs that no longer exist, and lets you view a deleted VM's last known state. A safety check suppresses alerts if more than 50% of known VMs disappear at once, assuming a collector issue rather than mass deletion.</p>
<h2>Why it matters</h2>
<p>Root cause analysis gets faster, you open the dashboard and see change history correlated with performance instead of asking "did anyone change anything?". Change-impact assessment becomes data-backed before maintenance windows. Right-sizing gets context, so a recently scaled-up VM is not immediately flagged for downsizing. And audit and compliance get an automatic, continuous record of every configuration change, collected from the infrastructure itself.</p>
<h2>How it is built</h2>
<p>The Time Machine runs on range queries and label-based segment detection: sorting series by point count to find the authoritative source, comparing label values across time segments for host, IP, and power transitions, tracking disk identity by UUID, and using first-versus-last comparisons for numeric changes like vCPU and memory. Events are pulled with deduplication. Everything runs on the same Overwatch appliance with no extra infrastructure and no agents.</p>
<p>An investigation that used to take 45 minutes now takes 30 seconds: open the dashboard, select the VM, drag the slider, see what changed. <a href="/free-trial">Deploy a free trial</a> or explore <a href="/product/cluster-monitoring">cluster monitoring</a>.</p>`,
};
