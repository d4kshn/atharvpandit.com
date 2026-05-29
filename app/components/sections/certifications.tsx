import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Card } from "../card";
import { SectionShell } from "./section-shell";

export const Certifications: React.FC = () => {
	return (
		<SectionShell id="certifications" eyebrow="05" title="Certifications">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{certifications.map((c) => (
					<Card key={`${c.name}-${c.year}`}>
						<article className="p-6 h-full flex flex-col">
							<div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
								<BadgeCheck className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
								<h3 className="text-lg font-display text-zinc-900 dark:text-zinc-100">
									{c.name}
								</h3>
							</div>
							<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
								{c.issuer}
							</p>
							<p className="mt-1 text-xs text-zinc-500">
								{c.year}
								{c.credentialId ? ` · ${c.credentialId}` : null}
							</p>
							{c.url ? (
								<Link
									href={c.url}
									target="_blank"
									className="mt-auto pt-4 inline-flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
								>
									Verify
									<ArrowUpRight className="w-3.5 h-3.5" />
								</Link>
							) : null}
						</article>
					</Card>
				))}
			</div>
		</SectionShell>
	);
};
