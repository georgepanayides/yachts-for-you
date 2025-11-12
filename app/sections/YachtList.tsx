import YachtCard from "@/components/cards/YachtCard";
import Link from "next/link";

const yachts = [
	{
		title: "Majestic 120",
		description: "A tri-deck superyacht blending performance with refined interior volume.",
		sizeMeters: 120,
		date: "2025",
		guests: 12,
		cabins: 6,
		features: ["Jacuzzi", "Cinema", "Beach Club", "Jet Skis", "Gym", "Helipad", "Stabilizers"],
		price: 5000,
		currency: "AED",
		period: "/ hr",
		href: "/yachts/majestic-120",
		imageSrc: "/images/home-hero-yacht.png",
		imageAlt: "Majestic 120 superyacht cruising at sunset",
	},
	{
		title: "Azure 90",
		description: "Elegant lines and a spacious flybridge ideal for hosting sunset gatherings.",
		sizeMeters: 90,
		date: "2024",
		guests: 10,
		cabins: 5,
		features: ["Flybridge", "Wet Bar", "Tender", "Seabobs", "Sun Pads", "Stabilizers"],
		price: 3200,
		currency: "AED",
		period: "/ hr",
		href: "/yachts/azure-90",
		imageSrc: "/images/home-hero-yacht-v2.png",
		imageAlt: "Azure 90 yacht with flybridge at dusk",
	},
	{
		title: "Serenity 65",
		description: "A modern cruiser perfect for intimate charters and coastal exploration.",
		sizeMeters: 65,
		date: "2023",
		guests: 8,
		cabins: 4,
		features: ["Swim Platform", "Salon", "Galley", "Sun Deck", "Sound System"],
		price: 1800,
		currency: "AED",
		period: "/ hr",
		href: "/yachts/serenity-65",
		imageSrc: "/images/home-hero-yacht.png",
		imageAlt: "Serenity 65 yacht anchored near coastline",
	},
	{
		title: "Vista 45",
		description: "Compact luxury with efficient space usage and panoramic lounging areas.",
		sizeMeters: 45,
		date: "2022",
		guests: 6,
		cabins: 3,
		features: ["Sun Roof", "Lounge", "Galley", "Swim Ladder"],
		price: 900,
		currency: "AED",
		period: "/ hr",
		href: "/yachts/vista-45",
		imageSrc: "/images/home-hero-yacht-v2.png",
		imageAlt: "Vista 45 yacht with sun roof open",
	},
];

export default function YachtList() {
	return (
		<section className="relative mx-auto p-20">
			{/* Section heading with action */}
			<div className="mb-10 flex items-end justify-between border-b border-black/10 pb-6 dark:border-white/10">
				<div>
					<h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight text-dark dark:text-off-white">
						Featured Yachts
					</h2>
					<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
						Explore a curated selection of charter-ready vessels.
					</p>
				</div>
				<div className="ml-6 flex shrink-0 items-center">
					<Link
						className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-dark transition hover:bg-off-white/80 dark:border-white/20 dark:text-off-white dark:hover:bg-white/10"
						aria-label="See all yachts"
						href="/yachts"
					>
						See all
						<span className="block h-3 w-3 rotate-[-45deg] border-b border-r border-current" />
					</Link>
				</div>
			</div>

			{/* Grid */}
			<div className="grid gap-8 sm:gap-10 md:grid-cols-2">
				{yachts.map((y) => (
					<YachtCard key={y.href} {...y} />
				))}
			</div>
		</section>
	);
}