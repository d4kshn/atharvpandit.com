import { ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";

// The entrance animation plays once per browser session. Gating is handled
// in CSS via the `html.hero-static` class (see global.css), which an inline
// script in app/layout.tsx sets before paint for repeat visits. This keeps
// the page fully static (no server-side cookie read) and flicker-free.
export const Hero: React.FC = () => {
	return (
		<section
			id="hero"
			className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden"
		>
			<div className="hero-divider hidden w-full h-px md:block animate-glow animate-fade-left bg-gradient-to-r from-zinc-700/0 via-zinc-700/50 to-zinc-700/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />

			<h1 className="hero-reveal py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-zinc-900 dark:bg-white cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text animate-title">
				{profile.displayName}
			</h1>

			<div className="hero-reveal z-10 mt-2 inline-flex items-center gap-3 animate-fade-in">
				{profile.logo ? (
					<div className="aspect-square h-12 sm:h-[60px] md:h-24 rounded-xl overflow-hidden border border-black -translate-y-1 sm:-translate-y-2 md:-translate-y-3">
						<img
							src={profile.logo}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
				) : null}
				<span className="px-0.5 z-10 text-5xl text-transparent duration-1000 bg-zinc-900 dark:bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
					{profile.alias}
				</span>
			</div>

			<div className="hero-divider hidden mt-6 w-full h-px md:block animate-glow animate-fade-right bg-gradient-to-r from-zinc-700/0 via-zinc-700/50 to-zinc-700/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />

			<div className="hero-reveal mt-16 px-6 text-center max-w-2xl animate-fade-in">
				<h2 className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
					{profile.tagline}
				</h2>
			</div>

			<a
				href="#about"
				aria-label="Scroll to next section"
				className="hero-reveal absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 duration-200 animate-fade-in"
			>
				<span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
				<ChevronDown className="w-5 h-5" />
			</a>
		</section>
	);
};
