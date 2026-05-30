"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

type NavItem =
	| { kind: "section"; id: string; label: string }
	| { kind: "route"; href: string; label: string }
	| { kind: "external"; href: string; label: string };

const items: NavItem[] = [
	{ kind: "section", id: "hero", label: "Home" },
	{ kind: "section", id: "about", label: "About" },
	{ kind: "section", id: "experience", label: "Experience" },
	{ kind: "section", id: "education", label: "Education" },
	{ kind: "section", id: "cves", label: "CVEs" },
	{ kind: "section", id: "certifications", label: "Certs" },
	{ kind: "route", href: "/projects", label: "Projects" },
	{ kind: "route", href: "/contact", label: "Contact" },
];

type TopNavProps = {
	blogUrl: string;
	/** When true, scroll-spy is enabled and the nav fades in on scroll past hero. */
	enableScrollSpy?: boolean;
};

export const TopNav: React.FC<TopNavProps> = ({
	blogUrl,
	enableScrollSpy = false,
}) => {
	const [scrolled, setScrolled] = useState(false);
	const [activeId, setActiveId] = useState<string | null>(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const intersecting = useRef<Map<string, number>>(new Map());
	const pathname = usePathname();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!enableScrollSpy) return;
		const sectionIds = items
			.filter((i): i is Extract<NavItem, { kind: "section" }> => i.kind === "section")
			.map((i) => i.id);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						intersecting.current.set(e.target.id, e.intersectionRatio);
					} else {
						intersecting.current.delete(e.target.id);
					}
				}
				let bestId: string | null = null;
				let bestRatio = -1;
				intersecting.current.forEach((ratio, id) => {
					if (ratio > bestRatio) {
						bestRatio = ratio;
						bestId = id;
					}
				});
				setActiveId(bestId);
			},
			{ rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
		);

		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}
		return () => {
			observer.disconnect();
			intersecting.current.clear();
		};
	}, [enableScrollSpy]);

	useEffect(() => {
		if (!menuOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [menuOpen]);

	const linkBase = "text-sm duration-200";
	const inactive =
		"text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200";
	const active = "text-zinc-900 dark:text-zinc-100";
	const decoration = "decoration-zinc-700 dark:decoration-zinc-400";

	const renderItem = (item: NavItem) => {
		if (item.kind === "section") {
			const isActive = enableScrollSpy && activeId === item.id;
			// Home links to "/" (not "/#hero") so the URL stays clean. On the
			// home page we smooth-scroll to top and strip any "#section" hash;
			// from other routes we navigate home.
			if (item.id === "hero") {
				return (
					<Link
						key={item.id}
						href="/"
						onClick={(e) => {
							setMenuOpen(false);
							if (pathname === "/") {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
								window.history.replaceState(null, "", "/");
							}
						}}
						className={`${linkBase} ${isActive ? active : inactive} ${
							isActive ? `underline underline-offset-8 ${decoration}` : ""
						}`}
					>
						{item.label}
					</Link>
				);
			}
			return (
				<a
					key={item.id}
					href={`/#${item.id}`}
					onClick={() => setMenuOpen(false)}
					className={`${linkBase} ${isActive ? active : inactive} ${
						isActive ? `underline underline-offset-8 ${decoration}` : ""
					}`}
				>
					{item.label}
				</a>
			);
		}
		if (item.kind === "route") {
			const isActive = pathname?.startsWith(item.href) ?? false;
			return (
				<Link
					key={item.href}
					href={item.href}
					onClick={() => setMenuOpen(false)}
					className={`${linkBase} ${isActive ? active : inactive} ${
						isActive ? `underline underline-offset-8 ${decoration}` : ""
					}`}
				>
					{item.label}
				</Link>
			);
		}
		return null;
	};

	const externals = [{ label: "Blog", href: blogUrl }];

	const homeItem = items.find(
		(i): i is Extract<NavItem, { kind: "section" }> =>
			i.kind === "section" && i.id === "hero",
	);
	const projectsItem = items.find(
		(i): i is Extract<NavItem, { kind: "route" }> =>
			i.kind === "route" && i.href === "/projects",
	);
	const contactItem = items.find(
		(i): i is Extract<NavItem, { kind: "route" }> =>
			i.kind === "route" && i.href === "/contact",
	);
	const mobileMenuItems = items.filter(
		(i) => i.kind === "section" && i.id !== "hero",
	);

	return (
		<header>
			<div
				className={`fixed inset-x-0 top-0 z-50 duration-300 border-b ${
					scrolled
						? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-zinc-200 dark:border-zinc-800"
						: "border-transparent"
				}`}
			>
				<div className="container mx-auto flex items-center px-6 py-4">
					<nav className="hidden md:flex items-center gap-6 mx-auto">
						{items.map(renderItem)}
						{externals.map((e) => (
							<a
								key={e.label}
								href={e.href}
								target="_blank"
								rel="noopener noreferrer"
								className={`${linkBase} ${inactive} inline-flex items-center gap-1`}
							>
								{e.label}
								<ArrowUpRight className="w-3.5 h-3.5" />
							</a>
						))}
						<ThemeToggle className="ml-1" />
					</nav>

					<div className="md:hidden flex items-center justify-between w-full gap-3">
						{homeItem ? renderItem(homeItem) : null}
						<div className="flex items-center gap-4">
							{projectsItem ? renderItem(projectsItem) : null}
							<a
								href={blogUrl}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setMenuOpen(false)}
								className={`${linkBase} ${inactive} inline-flex items-center gap-1`}
							>
								Blog
								<ArrowUpRight className="w-3.5 h-3.5" />
							</a>
							{contactItem ? renderItem(contactItem) : null}
							<ThemeToggle />
							<button
								type="button"
								aria-label="Toggle menu"
								aria-expanded={menuOpen}
								onClick={() => setMenuOpen((v) => !v)}
								className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
							>
								{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
						</div>
					</div>
				</div>

				{menuOpen ? (
					<div className="md:hidden border-t border-zinc-200 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm">
						<nav className="flex flex-col px-6 py-4 gap-4">
							{mobileMenuItems.map(renderItem)}
						</nav>
					</div>
				) : null}
			</div>
		</header>
	);
};
