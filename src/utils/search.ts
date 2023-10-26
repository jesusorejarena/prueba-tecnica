/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemsProps } from '../types/components';
import { PersonProps } from '../types/people';
import { PlanetProps } from '../types/planets';
import { StarshipProps } from '../types/starships';

export const searchFilter = (listDetails: ItemsProps[], search: string, type: string) => {
	if (type === 'people')
		return listDetails.filter((item: PersonProps | any) => {
			const searchTerm = search.toUpperCase();
			return (
				item.name.toUpperCase().includes(searchTerm) ||
				item.height.toUpperCase().includes(searchTerm) ||
				item.mass.toUpperCase().includes(searchTerm) ||
				item.hair_color.toUpperCase().includes(searchTerm) ||
				item.skin_color.toUpperCase().includes(searchTerm) ||
				item.eye_color.toUpperCase().includes(searchTerm) ||
				item.birth_year.toUpperCase().includes(searchTerm) ||
				item.gender.toUpperCase().includes(searchTerm)
			);
		});

	if (type === 'planets')
		return listDetails.filter((item: PlanetProps | any) => {
			const searchTerm = search.toUpperCase();
			return (
				item.rotation_period.toUpperCase().includes(searchTerm) ||
				item.orbital_period.toUpperCase().includes(searchTerm) ||
				item.diameter.toUpperCase().includes(searchTerm) ||
				item.climate.toUpperCase().includes(searchTerm) ||
				item.gravity.toUpperCase().includes(searchTerm) ||
				item.terrain.toUpperCase().includes(searchTerm) ||
				item.surface_water.toUpperCase().includes(searchTerm) ||
				item.population.toUpperCase().includes(searchTerm)
			);
		});

	if (type === 'starships')
		return listDetails.filter((item: StarshipProps | any) => {
			const searchTerm = search.toUpperCase();
			return (
				item.model.toUpperCase().includes(searchTerm) ||
				item.manufacturer.toUpperCase().includes(searchTerm) ||
				item.cost_in_credits.toUpperCase().includes(searchTerm) ||
				item.length.toUpperCase().includes(searchTerm) ||
				item.max_atmosphering_speed.toUpperCase().includes(searchTerm) ||
				item.crew.toUpperCase().includes(searchTerm) ||
				item.passengers.toUpperCase().includes(searchTerm) ||
				item.cargo_capacity.toUpperCase().includes(searchTerm) ||
				item.consumables.toUpperCase().includes(searchTerm) ||
				item.hyperdrive_rating.toUpperCase().includes(searchTerm) ||
				item.MGLT.toUpperCase().includes(searchTerm) ||
				item.starship_class.toUpperCase().includes(searchTerm)
			);
		});
};
