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
			{/* Section intro: spacious, centered, no divider */}
			<div className="mx-auto mb-14 max-w-4xl text-center md:mb-20">
				<h2 className="text-4xl md:text-6xl font-light tracking-tight text-dark dark:text-off-white">
					Discover our yachts for sale
				</h2>
				<p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
					Buy from our world‑class fleet ranging from 25m to 80m+, with access to some exclusive luxury superyachts.
				</p>
				<div className="mt-10 flex justify-center">
					<Link
						href="/yachts"
						className="inline-flex items-center gap-2 rounded-full border border-luxury/40 px-6 py-3 text-sm font-medium text-luxury transition"
						aria-label="See all yachts"
					>
						View all yachts
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