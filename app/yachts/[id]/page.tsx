import Image from "next/image";
import Link from "next/link";
import { LuRuler, LuCalendar, LuUsers, LuBedDouble, LuCheck } from "react-icons/lu";

type Yacht = {
	id: string;
	title: string;
	description: string;
	sizeMeters?: number;
	date?: string;
	guests?: number;
	cabins?: number;
	features?: string[];
	images: string[]; // first is the main image
	price?: number;
	currency?: string;
	period?: string;
};

const YACHTS: Record<string, Yacht> = {
	"majestic-120": {
		id: "majestic-120",
		title: "Majestic 120",
		description:
			"A tri-deck superyacht blending performance with refined interior volume. Curated charters with exceptional onboard amenities.",
		sizeMeters: 120,
		date: "2025",
		guests: 12,
		cabins: 6,
		features: ["Jacuzzi", "Cinema", "Beach Club", "Jet Skis", "Gym", "Helipad", "Stabilizers"],
		images: [
			"/images/home-hero-yacht.png",
			"/images/home-hero-yacht-v2.png",
			"/images/home-hero-yacht.png",
		],
		price: 5000,
		currency: "AED",
		period: "/ hr",
	},
	"azure-90": {
		id: "azure-90",
		title: "Azure 90",
		description:
			"Elegant lines and a spacious flybridge ideal for hosting sunset gatherings.",
		sizeMeters: 90,
		date: "2024",
		guests: 10,
		cabins: 5,
		features: ["Flybridge", "Wet Bar", "Tender", "Seabobs", "Sun Pads", "Stabilizers"],
		images: [
			"/images/home-hero-yacht-v2.png",
			"/images/home-hero-yacht.png",
			"/images/home-hero-yacht-v2.png",
		],
		price: 3200,
		currency: "AED",
		period: "/ hr",
	},
};

function formatPrice(n?: number, currency: string = "AED"): string {
	if (n == null) return "";
	try {
		return new Intl.NumberFormat(undefined, {
			style: "currency",
			currency,
			maximumFractionDigits: 0,
		}).format(n);
	} catch {
		return `${currency} ${n.toLocaleString()}`;
	}
}

export default function YachtPage({ params }: { params: { id: string } }) {
	const id = params.id;
	const yacht: Yacht | undefined = YACHTS[id] ?? Object.values(YACHTS)[0];

	const [main, rightTop, rightBottom] = yacht.images;
	const priceLabel = yacht.price
		? `${formatPrice(yacht.price, yacht.currency)}${yacht.period ?? ""}`
		: undefined;

	return (
		<main className="mx-auto">
			{/* Gallery */}
			<section className="mb-10 grid gap-2 md:grid-cols-3 md:grid-rows-2">
				{/* Big left image spans two rows */}
				<div className="relative col-span-2 row-span-2 overflow-hidden h-[calc(100vh-200px)]">
					<Image
						src={main}
						alt={yacht.title}
						fill
						priority
						className="object-cover"
						sizes="(max-width:768px) 100vw, (max-width:1200px) 66vw, 800px"
					/>
				</div>
				{/* Right top */}
				<div className="relative overflow-hidden">
					<Image
						src={rightTop ?? main}
						alt={`${yacht.title} gallery 1`}
						fill
						className="object-cover"
						sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 400px"
					/>
				</div>
				{/* Right bottom */}
				<div className="relative overflow-hidden">
					<Image
						src={rightBottom ?? main}
						alt={`${yacht.title} gallery 2`}
						fill
						className="object-cover"
						sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 400px"
					/>
				</div>
			</section>

			{/* Title and quick stats */}
            <div className="px-12 py-5">
			<section className="mb-8">
				<h1 className="text-3xl md:text-4xl font-light tracking-tight text-dark dark:text-off-white">
					{yacht.title}
				</h1>
				<div className="mt-4 flex flex-wrap items-center gap-2">
					{typeof yacht.sizeMeters === "number" && (
						<span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-off-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
							<LuRuler className="h-3.5 w-3.5" />
							{yacht.sizeMeters}m
						</span>
					)}
					{yacht.date && (
						<span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-off-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
							<LuCalendar className="h-3.5 w-3.5" />
							{yacht.date}
						</span>
					)}
					{typeof yacht.guests === "number" && (
						<span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-off-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
							<LuUsers className="h-3.5 w-3.5" />
							{yacht.guests} guests
						</span>
					)}
					{typeof yacht.cabins === "number" && (
						<span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-off-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
							<LuBedDouble className="h-3.5 w-3.5" />
							{yacht.cabins} cabins
						</span>
					)}
				</div>
			</section>

			{/* Content split: description + sidebar */}
			<section className="mb-16 grid gap-10 md:grid-cols-3">
				<div className="md:col-span-2">
					<h2 className="sr-only">Overview</h2>
					<p className="text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
						{yacht.description}
					</p>

					{yacht.features && yacht.features.length > 0 && (
						<div className="mt-6">
							<h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
								Features
							</h3>
							<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-700 dark:text-zinc-300">
								{yacht.features.slice(0, 12).map((f, i) => (
									<span key={`${f}-${i}`} className="inline-flex items-center gap-1.5">
										<LuCheck className="h-4 w-4 text-luxury" />
										{f}
									</span>
								))}
								{yacht.features.length > 12 && (
									<span className="text-zinc-500 dark:text-zinc-400">+{yacht.features.length - 12} more</span>
								)}
							</div>
						</div>
					)}
				</div>

				{/* Sidebar: price and CTA */}
				<aside className="md:col-span-1">
					<div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
						<div className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">From</div>
						<div className="mt-1 text-2xl font-semibold text-dark dark:text-off-white">
							{priceLabel || "Contact for pricing"}
						</div>
						<div className="mt-5 flex gap-3">
							<Link href="#enquire" className="inline-flex flex-1 items-center justify-center rounded-full bg-luxury px-5 py-3 text-sm font-medium text-off-white transition hover:brightness-110">
								Enquire
							</Link>
							<Link href="#itinerary" className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-dark hover:bg-off-white/80 dark:border-white/20 dark:text-off-white dark:hover:bg-white/10">
								Itinerary
							</Link>
						</div>
					</div>
                    
				</aside>
			</section>
            </div>
		</main>
	);
}

