import { Navbar as NavbarTemplate } from 'flowbite-react';

export default function Navbar() {
	return (
		<nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
			<div className="mx-auto max-w-screen-xl">
				<NavbarTemplate fluid rounded>
					<NavbarTemplate.Brand className="flex-1" href="/">
						<span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Manosos SPA</span>
					</NavbarTemplate.Brand>
					<div className="flex">
						<NavbarTemplate.Toggle />
					</div>
					<NavbarTemplate.Collapse>
						<NavbarTemplate.Link href="/">Home</NavbarTemplate.Link>
						<NavbarTemplate.Link href="/all/people">People</NavbarTemplate.Link>
						<NavbarTemplate.Link href="/all/planets">Planets</NavbarTemplate.Link>
						<NavbarTemplate.Link href="/all/starships">Starships</NavbarTemplate.Link>
					</NavbarTemplate.Collapse>
				</NavbarTemplate>
			</div>
		</nav>
	);
}
