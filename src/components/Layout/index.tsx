import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout: FunctionComponent = () => {
	return (
		<>
			<Navbar />

			<main className="mt-5 mb-20 flex flex-col gap-y-10 min-h-screen">
				<div className="px-4 flex-1 mx-auto max-w-screen-xl w-full">
					<Outlet />
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Layout;
