import { Badge } from 'flowbite-react';
import CardBodyInfo from '../CardBodyInfo';
import { CardBodyProps } from '../../../types/components';

const CardBodyPeople = ({ item }: CardBodyProps) => {
	const include = ['height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

	return (
		<>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
				<p>{item.name}</p>
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				<ul className="capitalize">
					{Object.keys(item).map((key: string, index: number) => {
						if (include.includes(key)) return <CardBodyInfo key={index} title={key} value={item[key]} />;
						else return null;
					})}
				</ul>
			</p>

			<div className="flex flex-wrap items-center gap-5 justify-center mt-5">
				{item?.vehicles.length > 0 && (
					<div className="bg-blue-500 rounded-3xl px-2 py-1 flex items-center text-sm text-white">
						Vehicules
						<Badge color="light" className="ml-2 rounded-full">
							{item?.vehicles.length}
						</Badge>
					</div>
				)}
				{item?.films.length > 0 && (
					<div className="bg-blue-500 rounded-3xl px-2 py-1 flex items-center text-sm text-white">
						Films
						<Badge color="light" className="ml-2 rounded-full">
							{item?.films.length}
						</Badge>
					</div>
				)}
				{item?.starships.length > 0 && (
					<div className="bg-blue-500 rounded-3xl px-2 py-1 flex items-center text-sm text-white">
						Starships
						<Badge color="light" className="ml-2 rounded-full">
							{item.starships.length}
						</Badge>
					</div>
				)}
			</div>
		</>
	);
};

export default CardBodyPeople;
