/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from 'flowbite-react';
import CardBodyInfo from '../CardBodyInfo';

const CardBodyStarships = ({ item }: any) => {
	const include = [
		'model',
		'manufacturer',
		'cost_in_credits',
		'length',
		'max_atmosphering_speed',
		'crew',
		'passengers',
		'cargo_capacity',
		'consumables',
		'hyperdrive_rating',
		'MGLT',
		'starship_class',
	];

	return (
		<>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<p>{item.name}</p>
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				<ul className="capitalize">
					{Object.keys(item).map((key: any, index: number) => {
						if (include.includes(key))
							return (
								<CardBodyInfo key={index} title={key} value={key === 'residents' ? item[key].length : item[key]} />
							);
						else return null;
					})}
				</ul>
			</p>

			<div className="flex flex-wrap items-center gap-5 justify-center mt-5">
				{item?.pilots.length > 0 && (
					<div className="bg-blue-500 rounded-3xl px-2 py-1 flex items-center text-white">
						Pilots
						<Badge color="light" className="ml-2 rounded-full">
							{item?.pilots.length}
						</Badge>
					</div>
				)}
				{item?.films.length > 0 && (
					<div className="bg-blue-500 rounded-3xl px-2 py-1 flex items-center text-white">
						Films
						<Badge color="light" className="ml-2 rounded-full">
							{item?.films.length}
						</Badge>
					</div>
				)}
			</div>
		</>
	);
};

export default CardBodyStarships;
