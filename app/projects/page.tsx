import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { TopNav } from "../components/top-nav";
import { Card } from "../components/card";
import { SectionShell } from "../components/sections/section-shell";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
	return (
		<div className="relative pb-16">
			<TopNav blogUrl={profile.links.blog} />
			<SectionShell
				id="projects"
				title="Projects"
				intro="Some of the projects are from work, some are on my own time."
			>
				{projects.length === 0 ? (
					<Card>
						<article className="relative w-full h-full p-6 md:p-8">
							<p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
								Placeholder
							</p>
							<h2 className="mt-4 text-2xl font-display text-zinc-900 dark:text-zinc-100 sm:text-3xl">
								Project title goes here
							</h2>
							<p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
								A short description of what this project does, what stack it
								uses, and why it's interesting. Add entries to{" "}
								<code className="font-mono text-zinc-700 dark:text-zinc-300">
									data/projects.ts
								</code>{" "}
								to replace this placeholder.
							</p>
							<p className="mt-6 text-sm text-zinc-500">Coming soon.</p>
						</article>
					</Card>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projects.map((p) => (
							<Card key={p.title}>
								<article className="relative w-full h-full p-6 md:p-8 flex flex-col">
									<div className="flex items-center justify-between gap-2">
										{p.year ? (
											<span className="text-xs text-zinc-500">{p.year}</span>
										) : null}
										{p.tags && p.tags.length > 0 ? (
											<div className="flex flex-wrap gap-1.5">
												{p.tags.map((t) => (
													<span
														key={t}
														className="text-[10px] uppercase tracking-wider px-2 py-0.5 border rounded-full border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
													>
														{t}
													</span>
												))}
											</div>
										) : null}
									</div>

									<h3 className="mt-4 text-2xl font-display text-zinc-900 dark:text-zinc-100">
										{p.title}
									</h3>
									<p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
										{p.description}
									</p>

									<div className="mt-auto pt-6 flex items-center gap-4 text-xs">
										{p.url ? (
											<Link
												href={p.url}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
											>
												Visit
												<ArrowUpRight className="w-3.5 h-3.5" />
											</Link>
										) : null}
										{p.repository ? (
											<Link
												href={p.repository}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
											>
												<Github className="w-3.5 h-3.5" />
												Source
											</Link>
										) : null}
									</div>
								</article>
							</Card>
						))}
					</div>
				)}
			</SectionShell>
		</div>
	);
}
