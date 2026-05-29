import { profile } from "@/data/profile";
import { SectionShell } from "./section-shell";

export const About: React.FC = () => {
	return (
		<SectionShell id="about" eyebrow="01" title="About Me">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
				<p className="md:col-span-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
					{profile.bio}
				</p>
				<ul className="flex flex-wrap gap-2 md:justify-end">
					{profile.highlights.map((h) => (
						<li
							key={h}
							className="px-3 py-1 text-xs border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-700 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/40"
						>
							{h}
						</li>
					))}
				</ul>
			</div>
		</SectionShell>
	);
};
