import { Link } from 'react-router-dom';
import { NavItem } from '../../types/components';

export default function Navbar() {
	const Item = ({ href, text }: NavItem) => {
		return (
			<Link to={href}>
				<p className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
					{text}
				</p>
			</Link>
		);
	};

	return (
		<nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
			<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
				<Link to="/" className="flex items-center">
					<h1 className="text-3xl font-bold">Manosos SPA</h1>
				</Link>
				<button
					data-collapse-toggle="mega-menu-full-cta"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="mega-menu-full-cta"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					id="mega-menu-full-cta"
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
				>
					<ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
						<li>
							<Item href="/" text="Home" />
						</li>
						<li>
							<Item href="/all/people" text="People" />
						</li>
						<li>
							<Item href="/all/planets" text="Planets" />
						</li>
						<li>
							<Item href="/all/starships" text="Starships" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
