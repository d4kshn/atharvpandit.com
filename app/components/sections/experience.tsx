import Link from "next/link";
import { experience } from "@/data/experience";
import { Card } from "../card";
import { SectionShell } from "./section-shell";

export const Experience: React.FC = () => {
	return (
		<SectionShell id="experience" eyebrow="02" title="Experience">
			<div className="grid grid-cols-1 gap-6">
				{experience.map((e) => (
					<Card key={`${e.company}-${e.start}`}>
						<article className="p-6 md:p-8">
							<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
								<div>
									<h3 className="text-xl md:text-2xl font-display text-zinc-900 dark:text-zinc-100">
										{e.role}
									</h3>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">
										{e.url ? (
											<Link
												href={e.url}
												target="_blank"
												className="hover:text-zinc-900 dark:hover:text-zinc-200 underline decoration-zinc-400 dark:decoration-zinc-700"
											>
												{e.company}
											</Link>
										) : (
											e.company
										)}
										{e.location ? ` · ${e.location}` : null}
									</p>
								</div>
								<p className="text-xs text-zinc-500 whitespace-nowrap">
									{e.start} — {e.end}
								</p>
							</div>
							<div className="mt-4 space-y-4">
								{e.description.map((d, i) => (
									<p
										key={i}
										className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
									>
										{d}
									</p>
								))}
							</div>
						</article>
					</Card>
				))}
			</div>
		</SectionShell>
	);
};
