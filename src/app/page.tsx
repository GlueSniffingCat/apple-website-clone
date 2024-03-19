import Navbar from "./COMPONENTS/NAVBAR";
import Hero from "./SECTIONS/Hero";
export default function Home() {
	return (
		<main className="min-h-screen bg-black">
			{/* NAVBAR */}
			<Navbar />
			{/* HERO SECTION */}
			<Hero />
			{/* HIGHLIGHTS */}
		</main>
	);
}
