/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useEffect, useState } from 'react';
import Card from '../components/Card';
import { toast } from 'sonner';
import CardViewAll from '../components/CardViewAll';
import { peopleAPI } from '../services/people';
import { planetsAPI } from '../services/planets';
import { starshipsAPI } from '../services/starships';
import { extractPart } from '../utils';

const Landing: FunctionComponent = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);

	useEffect(() => {
		const effect = async () => {
			try {
				const response: any = await peopleAPI();

				setPeople(await response.results.slice(0, 5));
			} catch (error) {
				toast.error('Error loading people');
			}

			try {
				const response: any = await planetsAPI();

				setPlanets(response.results.slice(0, 5));
			} catch (error) {
				toast.error('Error loading planets');
			}

			try {
				const response: any = await starshipsAPI();

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
					{people.map((item: any) => (
						<Card item={item} to={`/all/people/details${extractPart(item.url)}`} type="people" />
					))}
					<CardViewAll to="/all/people" />
				</div>
			</div>
			<div className="mt-24">
				<h2 className="text-3xl font-bold">Planets</h2>
				<div className="my-5 border-t-2 border-gray-400 w-[300px]" />
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-8">
					{planets.map((item: any) => (
						<Card item={item} to={`/all/planets/details${extractPart(item.url)}`} type="planets" />
					))}
					<CardViewAll to="/all/planets" />
				</div>
			</div>
			<div className="mt-24">
				<h2 className="text-3xl font-bold">Starships</h2>
				<div className="my-5 border-t-2 border-gray-400 w-[300px]" />
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-8">
					{starships.map((item: any) => (
						<Card item={item} to={`/all/starships/details${extractPart(item.url)}`} type="starships" />
					))}
					<CardViewAll to="/all/starships" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
