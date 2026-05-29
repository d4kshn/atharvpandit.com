import Link from "next/link";
import { education } from "@/data/education";
import { Card } from "../card";
import { SectionShell } from "./section-shell";

export const Education: React.FC = () => {
	return (
		<SectionShell id="education" eyebrow="03" title="Education">
			<div className="grid grid-cols-1 gap-6">
				{education.map((e) => (
					<Card key={`${e.institution}-${e.start}`}>
						<article className="p-6 md:p-8">
							<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
								<div>
									<h3 className="text-xl md:text-2xl font-display text-zinc-900 dark:text-zinc-100">
										{e.degree}
									</h3>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">
										{e.url ? (
											<Link
												href={e.url}
												target="_blank"
												className="hover:text-zinc-900 dark:hover:text-zinc-200 underline decoration-zinc-400 dark:decoration-zinc-700"
											>
												{e.institution}
											</Link>
										) : (
											e.institution
										)}
										{e.location ? ` · ${e.location}` : null}
									</p>
								</div>
								<p className="text-xs text-zinc-500 whitespace-nowrap">
									{e.start} — {e.end}
								</p>
							</div>
							{e.description ? (
								<p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
									{e.description}
								</p>
							) : null}
							{e.highlights && e.highlights.length > 0 ? (
								<ul className="mt-4 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
									{e.highlights.map((h) => (
										<li key={h}>{h}</li>
									))}
								</ul>
							) : null}
						</article>
					</Card>
				))}
			</div>
		</SectionShell>
	);
};
