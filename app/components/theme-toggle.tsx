"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle: React.FC<{ className?: string }> = ({
	className = "",
}) => {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = mounted ? resolvedTheme === "dark" : true;

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={`text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 duration-200 ${className}`}
		>
			{isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
		</button>
	);
};
