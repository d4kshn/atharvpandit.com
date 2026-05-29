"use client";

import { useEffect } from "react";

// Marks the hero entrance animation as "already shown" shortly after the first
// paint, so client-side navigations back to the home page within the same
// session don't replay it. Repeat *full* page loads are handled flicker-free
// before paint by the inline script in app/layout.tsx.
export const VisitTracker: React.FC = () => {
	useEffect(() => {
		const id = window.setTimeout(() => {
			document.documentElement.classList.add("hero-static");
		}, 3200);
		return () => window.clearTimeout(id);
	}, []);
	return null;
};
