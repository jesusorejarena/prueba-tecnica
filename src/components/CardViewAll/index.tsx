/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card as CardTemplate } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CardViewAll = ({ to }: any) => {
	return (
		<Link to={to}>
			<CardTemplate
				className="w-[400px]"
				// imgAlt="Meaningful alt text for an image that is not purely decorative"
				// imgSrc="https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=640&q=75"
			>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					<p>Ver todo...</p>
				</h5>
			</CardTemplate>
		</Link>
	);
};

export default CardViewAll;
