import { Badge } from 'flowbite-react';
import CardBodyInfo from '../CardBodyInfo';
import { useParams } from 'react-router-dom';
import { extractPart } from '../../../utils';
import { CardBodyProps } from '../../../types/components';

const CardBodyPlanets = ({ item }: CardBodyProps) => {
	const { id } = useParams();

	const include = [
		'rotation_period',
		'orbital_period',
		'diameter',
		'climate',
		'gravity',
		'terrain',
		'surface_water',
		'population',
		'residents',
	];

	return (
		<>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<p>{item.name}</p>
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				<ul className="capitalize">
					{Object.keys(item).map((key: string, index: number) => {
						if (include.includes(key))
							return (
								<CardBodyInfo key={index} title={key} value={key === 'residents' ? item[key].length : item[key]} />
							);
						else return null;
					})}
				</ul>
			</p>

			<div className="flex flex-wrap items-center gap-5 justify-center mt-5">
				{item?.films.length > 0 && (
					<div className="bg-blue-500 rounded-3xl px-2 py-1 flex items-center text-white">
						Films
						<Badge color="light" className="ml-2 rounded-full">
							{item?.films.length}
						</Badge>
					</div>
				)}
			</div>

			{id && (
				<div className="flex flex-wrap items-center gap-5 justify-center mt-5">
					{item.residents.map((resident: string, index: number) => (
						<a href={`/all/people/details${extractPart(resident)}`}>
							<div className="bg-blue-500 rounded-3xl px-2 py-1 flex items-center text-white">User {index + 1}</div>
						</a>
					))}
				</div>
			)}
		</>
	);
};

export default CardBodyPlanets;
