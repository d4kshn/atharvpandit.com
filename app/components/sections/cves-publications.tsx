import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cves, publications } from "@/data/cves";
import { Card } from "../card";
import { SectionShell } from "./section-shell";

const severityColors: Record<string, string> = {
	Critical:
		"text-red-700 dark:text-red-400 border-red-500/40 bg-red-500/10",
	High:
		"text-orange-700 dark:text-orange-400 border-orange-500/40 bg-orange-500/10",
	Medium:
		"text-yellow-700 dark:text-yellow-400 border-yellow-500/40 bg-yellow-500/10",
	Low:
		"text-emerald-700 dark:text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
};

export const CvesPublications: React.FC = () => {
	return (
		<SectionShell
			id="cves"
			eyebrow="04"
			title="CVEs & Publications"
			intro="Disclosed vulnerabilities and selected writing."
		>
			<div className="space-y-12">
				<div>
					<h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
						CVEs
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{cves.map((c) => {
							const sev = severityColors[c.severity] ?? severityColors.Low;
							return (
								<Card key={c.id}>
									<article className="p-6 md:p-8 h-full">
										<div className="flex items-center justify-between gap-2">
											<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
												{c.id}
											</span>
											<span
												className={`text-[10px] uppercase tracking-wider px-2 py-0.5 border rounded-full ${sev}`}
											>
												{c.severity}
											</span>
										</div>
										<h4 className="mt-3 text-lg font-display text-zinc-900 dark:text-zinc-100">
											{c.title}
										</h4>
										<p className="mt-1 text-xs text-zinc-500">
											{c.product} · {c.year}
										</p>
										<p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
											{c.description}
										</p>
										{c.url ? (
											<Link
												href={c.url}
												target="_blank"
												className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
											>
												Read advisory
												<ArrowUpRight className="w-3.5 h-3.5" />
											</Link>
										) : null}
									</article>
								</Card>
							);
						})}
					</div>
				</div>

				<div>
					<h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
						Publications
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{publications.map((p) => (
							<Card key={p.title}>
								<article className="p-6 md:p-8 h-full">
									<div className="flex items-center justify-between gap-2">
										<span className="text-xs text-zinc-600 dark:text-zinc-400">
											{p.venue}
										</span>
										<span className="text-xs text-zinc-500">{p.year}</span>
									</div>
									<h4 className="mt-3 text-lg font-display text-zinc-900 dark:text-zinc-100">
										{p.title}
									</h4>
									<p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
										{p.description}
									</p>
									{p.url ? (
										<Link
											href={p.url}
											target="_blank"
											className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
										>
											Read more
											<ArrowUpRight className="w-3.5 h-3.5" />
										</Link>
									) : null}
								</article>
							</Card>
						))}
					</div>
				</div>
			</div>
		</SectionShell>
	);
};
