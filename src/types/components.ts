/* eslint-disable @typescript-eslint/no-explicit-any */
import { PeopleResponseProps, PersonProps } from './people';
import { PlanetProps, PlanetsResponseProps } from './planets';
import { StarshipProps, StarshipsResponseProps } from './starships';

export interface NavItem {
	href: string;
	text: string;
}

export interface CardProps {
	item: any;
	to: string;
	type: string;
}

export interface CardBodyInfoProps {
	[title: string]: any;
	value: string;
}

export interface CardBodyProps {
	item: any;
}

export interface CardViewAllProps {
	to: string;
}

export interface InputSearchProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export type ItemsProps = PersonProps | PlanetProps | StarshipProps;
export type ItemsResponseProps = PeopleResponseProps | PlanetsResponseProps | StarshipsResponseProps;
