"use client";
import {
	motion,
	useMotionTemplate,
	useSpring,
} from "framer-motion";

import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - left);
		mouseY.set(e.clientY - top);
	}

	function onTouch(e: React.TouchEvent<HTMLDivElement>) {
		if (e.touches.length === 0) return;
		const t = e.touches[0];
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(t.clientX - left);
		mouseY.set(t.clientY - top);
	}

	const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			onMouseMove={onMouseMove}
			onTouchStart={onTouch}
			onTouchMove={onTouch}
			className="overflow-hidden relative duration-700 border rounded-xl bg-white/60 dark:bg-zinc-900/40 hover:bg-white/80 active:bg-white/80 dark:hover:bg-zinc-800/40 dark:active:bg-zinc-800/40 group md:gap-8 border-zinc-300 dark:border-zinc-600 hover:border-zinc-500/60 active:border-zinc-500/60 dark:hover:border-zinc-400/50 dark:active:border-zinc-400/50"
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
					className="absolute inset-0 z-10 bg-gradient-to-br from-zinc-700/0 via-zinc-700/20 to-zinc-700/0 dark:from-zinc-100/0 dark:via-zinc-100/10 dark:to-zinc-100/0 opacity-100 transition duration-1000 group-hover:opacity-70 group-active:opacity-70 dark:group-hover:opacity-50 dark:group-active:opacity-50"
					style={style}
				/>
				<motion.div
					className="absolute inset-0 z-10 bg-zinc-900 mix-blend-multiply dark:bg-white dark:mix-blend-soft-light opacity-0 transition duration-1000 group-hover:opacity-15 group-active:opacity-15 dark:group-hover:opacity-30 dark:group-active:opacity-30"
					style={style}
				/>
			</div>

			{children}
		</div>
	);
};
