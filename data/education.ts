export type EducationEntry = {
	degree: string;
	institution: string;
	location?: string;
	start: string;
	end: string;
	description?: string;
	highlights?: string[];
	url?: string;
};

export const education: EducationEntry[] = [
	{
		degree: "Master of Engineering in Cybersecurity",
		institution: "University of Maryland, College Park",
		location: "College Park, Maryland",
		start: "2024",
		end: "2026",
		description:
			"Specialized in cybersecurity and systems. Active member of the CTF team and cyber club.",
		highlights: [
			"GPA: 4.0 / 4",
			"Member of the university CTF team",
			"Published undergrad thesis on web authentication flaws",
		],
		url: "https://umd.edu/",
	},
	{
		degree: "Bachelor of Technology in Computer Science",
		institution: "Acropolis Group of Institutions",
		location: "Indore, India",
		start: "2018",
		end: "2022",
		description:
			"Specialized in cybersecurity and systems. Active member of the CTF team and security research club.",
		highlights: [
			"GPA: 7.54 / 10",
			"Captain of the university CTF team",
			"Published undergrad thesis on web authentication flaws",
		],
		url: "https://acropolis.in/",
	},
];
