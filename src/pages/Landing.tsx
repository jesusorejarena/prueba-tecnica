import { FunctionComponent, useEffect, useState } from 'react';
import Card from '../components/Card';
import { toast } from 'sonner';
import CardViewAll from '../components/CardViewAll';
import { peopleAPI } from '../services/people';
import { planetsAPI } from '../services/planets';
import { starshipsAPI } from '../services/starships';
import { extractPart } from '../utils';
import { PeopleResponseProps, PersonProps } from '../types/people';
import { StarshipProps, StarshipsResponseProps } from '../types/starships';
import { PlanetProps, PlanetsResponseProps } from '../types/planets';

const Landing: FunctionComponent = () => {
	const [people, setPeople] = useState<PersonProps[]>([]);
	const [planets, setPlanets] = useState<PlanetProps[]>([]);
	const [starships, setStarships] = useState<StarshipProps[]>([]);

	useEffect(() => {
		const effect = async () => {
			try {
				const response: PeopleResponseProps = await peopleAPI();

				setPeople(response.results.slice(0, 5));
			} catch (error) {
				toast.error('Error loading people');
			}

			try {
				const response: PlanetsResponseProps = await planetsAPI();

				setPlanets(response.results.slice(0, 5));
			} catch (error) {
				toast.error('Error loading planets');
			}

			try {
				const response: StarshipsResponseProps = await starshipsAPI();

				setStarships(response.results.slice(0, 5));
			} catch (error) {
				toast.error('Error loading ships');
			}
		};

		effect();
	}, []);

	return (
		<div className="mt-5">
			<div className="">
				<h2 className="text-3xl font-bold">People</h2>
				<div className="my-5 border-t-2 border-gray-400 w-[300px]" />
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-8">
					{people.map((item: PersonProps) => (
						<Card item={item} to={`/all/people/details${extractPart(item.url)}`} type="people" />
					))}
					<CardViewAll to="/all/people" />
				</div>
			</div>
			<div className="mt-24">
				<h2 className="text-3xl font-bold">Planets</h2>
				<div className="my-5 border-t-2 border-gray-400 w-[300px]" />
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-8">
					{planets.map((item: PlanetProps) => (
						<Card item={item} to={`/all/planets/details${extractPart(item.url)}`} type="planets" />
					))}
					<CardViewAll to="/all/planets" />
				</div>
			</div>
			<div className="mt-24">
				<h2 className="text-3xl font-bold">Starships</h2>
				<div className="my-5 border-t-2 border-gray-400 w-[300px]" />
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-8">
					{starships.map((item: StarshipProps) => (
						<Card item={item} to={`/all/starships/details${extractPart(item.url)}`} type="starships" />
					))}
					<CardViewAll to="/all/starships" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
