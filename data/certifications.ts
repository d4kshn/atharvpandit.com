export type CertificationEntry = {
	name: string;
	issuer: string;
	year: string;
	credentialId?: string;
	url?: string;
};

export const certifications: CertificationEntry[] = [
	{
		name: "GSEC",
		issuer: "GIAC",
		year: "April 2026",
		url: "https://www.credly.com/badges/cec2161d-5490-477b-8074-175c390fff92",
	},
	{
		name: "GFACT",
		issuer: "GIAC",
		year: "January 2026",
		url: "https://www.credly.com/badges/c7919938-6f6a-4b58-a38c-e35758c3f81f",
	},
	{
		name: "eJPT",
		issuer: "INE",
		year: "September 2025",
		url: "https://certs.ine.com/ced663fd-bd9e-437c-acc4-3eacaf2f967e",
	},
	{
		name: "Certified in Cybersecurity",
		issuer: "ISC2",
		year: "March 2025",
		url: "https://www.credly.com/badges/5b7ac0c3-2a18-4ada-ae8e-dc730275147f",
	},
	{
		name: "Security+ SY0-701",
		issuer: "CompTIA",
		year: "February 2025",
		url: "https://www.credly.com/badges/949d0835-73d2-4b66-b6c2-495bd80412a7",
	},
];
