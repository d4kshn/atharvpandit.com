"use client";

import { useEffect } from "react";

// Marks the hero entrance animation as "already shown" shortly after the first
// paint, so client-side navigations back to the home page within the same
// session don't replay it. Repeat *full* page loads are handled flicker-free
// before paint by the inline script in app/layout.tsx.
export const VisitTracker: React.FC = () => {
	useEffect(() => {
		// Slightly longer than the last hero element's delay + duration
		// (600ms + 600ms) so the entrance finishes before we lock it.
		const id = window.setTimeout(() => {
			document.documentElement.classList.add("hero-static");
		}, 1400);
		return () => window.clearTimeout(id);
	}, []);
	return null;
};
