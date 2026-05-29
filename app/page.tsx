import { profile } from "@/data/profile";
import { TopNav } from "./components/top-nav";
import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Experience } from "./components/sections/experience";
import { Education } from "./components/sections/education";
import { CvesPublications } from "./components/sections/cves-publications";
import { Certifications } from "./components/sections/certifications";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			<TopNav blogUrl={profile.links.blog} enableScrollSpy />
			<Hero />
			<main className="relative">
				<About />
				<Experience />
				<Education />
				<CvesPublications />
				<Certifications />
			</main>
		</div>
	);
}
