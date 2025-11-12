import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-50">
			{/* translucent backdrop to sit over hero imagery */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" aria-hidden="true" />
			<nav className="relative mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
				{/* Left: primary menu (show on md+) or hamburger on mobile */}
				<div className="flex w-1/3 items-center gap-6">
                    <a href="#" className="inline-flex items-center justify-center uppercase text-off-white font-extralight text-md">Menu</a>
				</div>

				{/* Center: logo/title */}
						<div className="flex w-1/3 items-center justify-center">
							<Link href="/" className="text-off-white tracking-wide uppercase text-lg font-extralight">
								YachtsForYou
							</Link>
						</div>

				{/* Right: minimal contact */}
				<div className="flex w-1/3 items-center justify-end">
					<a
						href="#contact"
						className="inline-flex items-center justify-center uppercase text-off-white font-extralight text-md"
					>
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
}