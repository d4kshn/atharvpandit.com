import { PropsWithChildren } from "react";

type SectionShellProps = {
	id: string;
	eyebrow?: string;
	title: string;
	intro?: string;
};

export const SectionShell: React.FC<PropsWithChildren<SectionShellProps>> = ({
	id,
	eyebrow,
	title,
	intro,
	children,
}) => {
	return (
		<section
			id={id}
			className="relative w-full py-24 md:py-32 scroll-mt-24"
		>
			<div className="container max-w-5xl mx-auto px-6">
				<div className="max-w-2xl">
					{eyebrow ? (
						<p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
							{eyebrow}
						</p>
					) : null}
					<h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl font-display">
						{title}
					</h2>
					{intro ? (
						<p className="mt-4 text-zinc-600 dark:text-zinc-400">{intro}</p>
					) : null}
				</div>
				<div className="mt-8 w-full h-px bg-gradient-to-r from-zinc-700/0 via-zinc-700/30 to-zinc-700/0 dark:from-zinc-300/0 dark:via-zinc-300/30 dark:to-zinc-300/0" />
				<div className="mt-10">{children}</div>
			</div>
		</section>
	);
};
