import { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import router from './Router';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import Page404 from '../pages/404';
import { RoutesProps } from '../types/router';

const RouterIndex = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						{router.map((route: RoutesProps, index: number) => {
							return (
								<Fragment key={index}>
									<Route path={route.path} element={<Suspense fallback={<Loader />}>{route.element}</Suspense>} />
									<Route path="*" element={<Page404 />} />
								</Fragment>
							);
						})}
					</Route>
				</Routes>
			</Router>
		</>
	);
};

export default RouterIndex;
