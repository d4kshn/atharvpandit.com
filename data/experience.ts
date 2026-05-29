export type ExperienceEntry = {
	role: string;
	company: string;
	location?: string;
	start: string;
	end: string | "Present";
	description: string[];
	url?: string;
};

export const experience: ExperienceEntry[] = [
	{
		role: "Security Engineer",
		company: "Nenosystems Consulting Services",
		location: "Indore, India",
		start: "Jun 2022",
		end: "Jul 2024",
		description: [
			"Served as security reviewer for the org’s ERP and SSO product, performed pre-merge code review on Python and PHP applications, and threat modeling on auth, RBAC, MFA and session flows, caught IDOR, broken access control and auth bypass issues before production deployment.",
			"Led recurring web app pentests against company’s critical web applications and APIs (OWASP Top 10 and OWASP ASVS) and wired SAST, DAST and SCA into CI/CD pipelines with build-breaking gates, which cut critical/high findings reaching production by 70%.",
			"Shipped reusable AppSec guardrails like hardened auth libraries, IaC policy-as-code and IAM/network baselines aligned to ISO 27001 and CIS frameworks, which effectively closed 10 audit gaps across the products’ hybrid on-prem and AWS footprint.",
		],
		url: "#",
	},
	{
		role: "SWE Intern",
		company: "Nenosystems Consulting Services",
		location: "Indore, India",
		start: "Jan 2022",
		end: "May 2022",
		description: [
			"Built Python and Flask REST APIs for the company’s multi-tenant SSO product, shipping user, role and permission management endpoints alongside session handling and activity logging.",
		],
		url: "#",
	},
];
