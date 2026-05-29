"use client";

import {
	ArrowUpRight,
	Check,
	Copy,
	Github,
	Linkedin,
	Mail,
	MessageCircle,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TopNav } from "../components/top-nav";
import { Card } from "../components/card";
import { SectionShell } from "../components/sections/section-shell";
import { profile } from "@/data/profile";

const extractHandle = (url: string): string => {
	if (url.startsWith("mailto:")) return url.slice(7);
	try {
		const u = new URL(url);
		const path = u.pathname.replace(/^\/?(in\/)?/, "").replace(/\/$/, "");
		return path ? `@${path}` : url;
	} catch {
		return url;
	}
};

type LinkSocial = {
	kind: "link";
	icon: typeof Mail;
	label: string;
	handle: string;
	href: string;
	cta: string;
};
type CopySocial = {
	kind: "copy";
	icon: typeof Mail;
	label: string;
	handle: string;
	copyValue: string;
};
type Social = LinkSocial | CopySocial;

const socials: Social[] = [
	{
		kind: "link",
		icon: Mail,
		label: "Email",
		handle: extractHandle(profile.links.email),
		href: profile.links.email,
		cta: "Send mail",
	},
	{
		kind: "link",
		icon: Linkedin,
		label: "LinkedIn",
		handle: extractHandle(profile.links.linkedin),
		href: profile.links.linkedin,
		cta: "Open profile",
	},
	{
		kind: "link",
		icon: Github,
		label: "GitHub",
		handle: extractHandle(profile.links.github),
		href: profile.links.github,
		cta: "Open profile",
	},
	{
		kind: "link",
		icon: Twitter,
		label: "Twitter",
		handle: extractHandle(profile.links.twitter),
		href: profile.links.twitter,
		cta: "Open profile",
	},
	{
		kind: "copy",
		icon: MessageCircle,
		label: "Discord",
		handle: `@${profile.links.discord}`,
		copyValue: profile.links.discord,
	},
];

function ContactCard({ social }: { social: Social }) {
	const [copied, setCopied] = useState(false);
	const Icon = social.icon;

	const onCopy = async () => {
		if (social.kind !== "copy") return;
		try {
			await navigator.clipboard.writeText(social.copyValue);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			// clipboard blocked — silently noop
		}
	};

	return (
		<Card>
			<article className="p-6 md:p-8 h-full flex flex-col">
				<div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
					<Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
					<h3 className="text-lg font-display text-zinc-900 dark:text-zinc-100">
						{social.label}
					</h3>
				</div>
				<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-mono break-all">
					{social.handle}
				</p>
				{social.kind === "link" ? (
					<Link
						href={social.href}
						target={social.href.startsWith("mailto:") ? undefined : "_blank"}
						rel={
							social.href.startsWith("mailto:")
								? undefined
								: "noopener noreferrer"
						}
						className="mt-auto pt-6 inline-flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
					>
						{social.cta}
						<ArrowUpRight className="w-3.5 h-3.5" />
					</Link>
				) : (
					<button
						type="button"
						onClick={onCopy}
						className="mt-auto pt-6 inline-flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
					>
						{copied ? (
							<>
								Copied
								<Check className="w-3.5 h-3.5" />
							</>
						) : (
							<>
								Copy username
								<Copy className="w-3.5 h-3.5" />
							</>
						)}
					</button>
				)}
			</article>
		</Card>
	);
}

export default function ContactPage() {
	return (
		<div className="relative min-h-screen">
			<TopNav blogUrl={profile.links.blog} />
			<SectionShell
				id="contact"
				title="Contact"
				intro="Reach out for security research, collaborations, or anything interesting."
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{socials.map((s) => (
						<ContactCard key={s.label} social={s} />
					))}
				</div>
			</SectionShell>
		</div>
	);
}
