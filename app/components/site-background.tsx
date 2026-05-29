"use client";

import { useEffect, useState } from "react";
import Particles from "./particles";

export const SiteBackground: React.FC = () => {
	const [showParticles, setShowParticles] = useState(false);

	useEffect(() => {
		const id = requestAnimationFrame(() => setShowParticles(true));
		return () => cancelAnimationFrame(id);
	}, []);

	return (
		<div aria-hidden="true" className="fixed inset-0 -z-50 pointer-events-none">
			<div className="absolute inset-0 bg-gradient-to-tl from-white via-zinc-200 to-white dark:from-black dark:via-zinc-600/20 dark:to-black" />
			{showParticles ? (
				<Particles className="absolute inset-0" quantity={100} />
			) : null}
		</div>
	);
};
