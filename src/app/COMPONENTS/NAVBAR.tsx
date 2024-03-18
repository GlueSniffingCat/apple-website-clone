import React from "react";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
	// Define your props here
};

const Navbar: React.FC<NavbarProps> = (props) => {
	// Destructure props if needed

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 p-8">
			<div>
				<Image
					src="/assets/images/apple.svg"
					alt="Apple"
					width={14}
					height={14}
				/>
			</div>
			<nav className="hidden md:block">
				<menu className="flex justify-center gap-4 text-gray text-xs">
					{[
						"Mac",
						"iPad",
						"iPhone",
						"Watch",
						"TV",
						"Music",
						"Support",
					].map((item, index) => (
						<li className="hover:text-gray-50 transition-colors">
							<Link href={`/${item.toLowerCase()}`} key={index}>
								{item}
							</Link>
						</li>
					))}
				</menu>
			</nav>
			<div className="flex items-center justify-end gap-4">
				<div>
					<Image
						src={"/assets/images/search.svg"}
						alt="Search"
						width={14}
						height={14}
					/>
				</div>
				<div>
					<Image
						src={"/assets/images/bag.svg"}
						alt="Bag"
						width={14}
						height={14}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
