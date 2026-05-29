export type CveEntry = {
	id: string;
	title: string;
	severity: "Critical" | "High" | "Medium" | "Low";
	product: string;
	year: string;
	description: string;
	url?: string;
};

export type PublicationEntry = {
	title: string;
	venue: string;
	year: string;
	description: string;
	url?: string;
};

export const cves: CveEntry[] = [
	{
		id: "CVE-2024-XXXXX",
		title: "Authentication bypass in Example Product",
		severity: "Critical",
		product: "Example Product v1.2.x",
		year: "2024",
		description:
			"Improper validation of session tokens allowed unauthenticated attackers to impersonate arbitrary users.",
		url: "#",
	},
	{
		id: "CVE-2023-XXXXX",
		title: "Stored XSS in Another Product",
		severity: "High",
		product: "Another Product v3.x",
		year: "2023",
		description:
			"User-supplied markdown was rendered without sufficient sanitization, leading to stored cross-site scripting against admin users.",
		url: "#",
	},
];

export const publications: PublicationEntry[] = [
	{
		title: "Sample blog post on a vulnerability class",
		venue: "Medium",
		year: "2024",
		description:
			"A deep dive into a class of authentication bypasses I've been seeing across modern SaaS apps.",
		url: "#",
	},
	{
		title: "Conference talk: Title goes here",
		venue: "Conference Name 2023",
		year: "2023",
		description:
			"Presented research on novel exploitation primitives in cloud-native deployments.",
		url: "#",
	},
];
