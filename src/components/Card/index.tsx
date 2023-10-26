import { Card as CardTemplate } from 'flowbite-react';
import { Link } from 'react-router-dom';
import CardBodyPeople from './CardBodyPeople';
import CardBodyPlanets from './CardBodyPlanets';
import CardBodyStarships from './CardBodyStarships';
import { CardProps } from '../../types/components';

const Card = ({ item, to, type }: CardProps) => {
	return (
		<Link to={to}>
			<CardTemplate
				className="w-[400px]"
				imgAlt="Meaningful alt text for an image that is not purely decorative"
				imgSrc="https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=640&q=75"
			>
				{type === 'people' && <CardBodyPeople item={item} />}
				{type === 'planets' && <CardBodyPlanets item={item} />}
				{type === 'starships' && <CardBodyStarships item={item} />}
			</CardTemplate>
		</Link>
	);
};

export default Card;
