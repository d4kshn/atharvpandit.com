import { ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";

// Simple staggered fade-up entrance: name, then alias, then tagline, then the
// scroll cue. Plays once per browser session — gating is handled in CSS via
// the `html.hero-static` class (see global.css), set before paint by the
// inline script in app/layout.tsx. Keeps the page static and flicker-free.
export const Hero: React.FC = () => {
	return (
		<section
			id="hero"
			className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden"
		>
			<h1
				className="hero-reveal py-3.5 px-0.5 z-10 text-5xl text-transparent bg-zinc-900 dark:bg-white cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text animate-fade-up"
				style={{ animationDelay: "0ms" }}
			>
				{profile.displayName}
			</h1>

			<div
				className="hero-reveal z-10 mt-2 inline-flex items-center gap-3 animate-fade-up"
				style={{ animationDelay: "200ms" }}
			>
				{profile.logo ? (
					<div className="aspect-square h-12 sm:h-[60px] md:h-24 rounded-xl overflow-hidden border border-black -translate-y-1 sm:-translate-y-2 md:-translate-y-3">
						<img
							src={profile.logo}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
				) : null}
				<span className="px-0.5 z-10 text-5xl text-transparent bg-zinc-900 dark:bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
					{profile.alias}
				</span>
			</div>

			<div
				className="hero-reveal mt-16 px-6 text-center max-w-2xl animate-fade-up"
				style={{ animationDelay: "400ms" }}
			>
				<h2 className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
					{profile.tagline}
				</h2>
			</div>

			<a
				href="#about"
				aria-label="Scroll to next section"
				className="hero-reveal absolute bottom-8 inset-x-0 mx-auto w-max z-10 flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 duration-200 animate-fade-up"
				style={{ animationDelay: "600ms" }}
			>
				<span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
				<ChevronDown className="w-5 h-5" />
			</a>
		</section>
	);
};
