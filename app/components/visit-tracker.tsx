"use client";

import { useEffect } from "react";

export const VisitTracker: React.FC = () => {
	useEffect(() => {
		if (!document.cookie.includes("home-visited=1")) {
			// Session cookie (no max-age) — clears when the browser closes.
			document.cookie = "home-visited=1; path=/; SameSite=Lax";
		}
	}, []);
	return null;
};
