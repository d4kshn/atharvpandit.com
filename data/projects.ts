export type ProjectEntry = {
	title: string;
	description: string;
	year?: string;
	tags?: string[];
	url?: string;
	repository?: string;
};

export const projects: ProjectEntry[] = [];
