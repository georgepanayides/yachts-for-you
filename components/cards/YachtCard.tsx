import Link from "next/link";
import Image from "next/image";
import { LuCheck, LuRuler, LuCalendar, LuUsers, LuBedDouble } from "react-icons/lu";

export type YachtCardProps = {
    title: string;
	description?: string;
	sizeMeters?: number;
	date?: string;
	guests?: number;
	cabins?: number;
	features?: string[];
	priceLabel?: string;
	price?: number;
	currency?: string; // e.g., "AED", "USD"
	period?: string; // e.g., "/ hr", "/ day"
	href?: string;
    imageSrc?: string; // public path or remote loader path
    imageAlt?: string;
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
		// Fallback if Intl lacks the currency code
		return `${currency} ${n.toLocaleString()}`;
	}
}

export default function YachtCard({
	title,
	description,
	sizeMeters,
	date,
	guests,
	cabins,
	features,
	priceLabel,
	price,
	currency = "AED",
	period = "/ day",
	href,
    imageSrc,
    imageAlt = "Yacht image",
}: YachtCardProps) {
	const computedPrice = priceLabel ?? `${formatPrice(price, currency)}${period}`;

	return (
		<article className="group relative overflow-hidden bg-white/85">
			{/* Image */}
			{imageSrc && (
				<div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs">
					<Image
						src={imageSrc}
						alt={imageAlt}
						fill
						className="object-cover object-center"
						sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 400px"
						priority={false}
					/>
                    <h3 className="text-3xl font-light tracking-tight text-white dark:text-off-white absolute left-7 bottom-7 z-10">
                        {title}
                    </h3>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-dark/90 via-dark/25 to-transparent" aria-hidden="true" />

				</div>
			)}
			<div className="flex flex-col gap-5 p-3 md:flex-row md:items-start md:justify-between">
				{/* Left: content */}
				<div className="flex-1">
					{description && (
						<p className="mt-1 text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
							{description}
						</p>
					)}
					{/* Features: text with icons */}
					{features && features.length > 0 && (
						<div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-700 dark:text-zinc-300">
							{features.slice(0, 6).map((f, i) => (
								<span key={`${f}-${i}`} className="inline-flex items-center gap-1.5">
									<LuCheck className="h-3.5 w-3.5 text-luxury" />
									{f}
								</span>
							))}
							{features.length > 6 && (
								<span className="text-zinc-500 dark:text-zinc-400">
									+{features.length - 6} more
								</span>
							)}
						</div>
					)}
					{/* Metadata pills (with icons) */}
					<div className="mt-4 flex flex-wrap items-center gap-2">
						{typeof sizeMeters === "number" && (
							<span className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-gray-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
								<LuRuler className="h-3.5 w-3.5" />
								{sizeMeters}m
							</span>
						)}
						{date && (
							<span className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-gray-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
								<LuCalendar className="h-3.5 w-3.5" />
								{date}
							</span>
						)}
						{typeof guests === "number" && (
							<span className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-gray-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
								<LuUsers className="h-3.5 w-3.5" />
								{guests} guests
							</span>
						)}
						{typeof cabins === "number" && (
							<span className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-gray-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
								<LuBedDouble className="h-3.5 w-3.5" />
								{cabins} cabins
							</span>
						)}
					</div>
				</div>
				{/* Right: price and action */}
				<div className="flex w-full flex-none items-end justify-between gap-3 md:w-auto md:flex-col md:items-end md:justify-start">
					<div className="text-right">
						<div className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
							From
						</div>
						<div className="text-xl font-semibold text-dark dark:text-off-white">
							{computedPrice}
						</div>
					</div>
					{href ? (
						<Link
							href={href}
							className="inline-flex items-center justify-center rounded-full bg-luxury px-4 py-2 text-sm font-medium text-off-white transition hover:brightness-110"
						>
							View details
						</Link>
					) : (
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-full bg-luxury px-4 py-2 text-sm font-medium text-off-white transition hover:brightness-110"
						>
							Enquire
						</button>
					)}
				</div>
			</div>
		</article>
	);
}

// Removed old MetaItem pill design in favor of a minimal inline icon row.

