export type Profile = {
	name: string;
	displayName: string;
	alias: string;
	logo: string;
	tagline: string;
	bio: string;
	highlights: string[];
	links: {
		blog: string;
		linkedin: string;
		github: string;
		twitter: string;
		email: string;
		discord: string;
	};
};

export const profile: Profile = {
	name: "Atharv",
	displayName: "Atharv Pandit",
	alias: "d4kshn",
	logo: "/d4kshn-logo.png",
	tagline:
		"Security engineer and researcher focused on offensive security, vulnerability research, and building tooling that makes the web safer.",
	bio: "I'm a security researcher and engineer who spends most of my time breaking, fixing, and writing about systems. I work across web app security, cloud, and low-level vulnerability research, and publish CVEs, blog posts, and tooling when I find something worth sharing.",
	highlights: [
		"Offensive Security",
		"Vulnerability Research",
		"Cloud Security",
		"CTF Player",
	],
	links: {
		blog: "https://atharvp.medium.com",
		linkedin: "https://www.linkedin.com/in/atharvpandit",
		github: "https://github.com/d4kshn",
		twitter: "https://x.com/iamdakshn",
		email: "mailto:atharvpandit50@gmail.com",
		discord: "d4kshn",
	},
};
