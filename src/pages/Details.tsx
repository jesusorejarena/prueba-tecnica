/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { peopleByIdAPI } from '../services/people';
import { planetsByIdAPI } from '../services/planets';
import { starshipsByIdAPI } from '../services/starships';
import CardBodyPeople from '../components/Card/CardBodyPeople';
import CardBodyPlanets from '../components/Card/CardBodyPlanets';
import CardBodyStarships from '../components/Card/CardBodyStarships';

const Details: FunctionComponent = () => {
	const { id, category } = useParams();

	const [details, setDetails] = useState();

	useEffect(() => {
		const effect = async () => {
			if (category === 'people')
				try {
					const response: any = await peopleByIdAPI(id ?? '0');

					setDetails(response);
				} catch (error) {
					toast.error('Error loading person');
				}

			if (category === 'planets')
				try {
					const response: any = await planetsByIdAPI(id ?? '0');

					setDetails(response);
				} catch (error) {
					toast.error('Error loading planet');
				}

			if (category === 'starships')
				try {
					const response: any = await starshipsByIdAPI(id ?? '0');

					setDetails(response);
				} catch (error) {
					toast.error('Error loading ship');
				}
		};

		effect();
	}, []);

	return (
		<div className="w-full flex justify-center mt-5">
			<Card
				className="w-[400px]"
				imgAlt="Meaningful alt text for an image that is not purely decorative"
				imgSrc="https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=640&q=75"
			>
				{details && (
					<>
						{category === 'people' && <CardBodyPeople item={details} />}
						{category === 'planets' && <CardBodyPlanets item={details} />}
						{category === 'starships' && <CardBodyStarships item={details} />}
					</>
				)}
			</Card>
		</div>
	);
};

export default Details;
