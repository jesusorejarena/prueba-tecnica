/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect, useState } from 'react';
import Card from '../components/Card';
import { toast } from 'sonner';
import { peopleAPI } from '../services/people';
import { planetsAPI } from '../services/planets';
import { starshipsAPI } from '../services/starships';
import { useParams } from 'react-router-dom';
import { extractPart } from '../utils';
import InputSearch from '../components/Commons/InputSearch';
import { searchFilter } from '../utils/search';
import { Pagination } from 'flowbite-react';
import { ItemsProps, ItemsResponseProps } from '../types/components';

const ListAll: FunctionComponent = () => {
	const { category } = useParams();

	const [listDetails, setListDetails] = useState<ItemsResponseProps>({
		count: 0,
		next: '',
		previous: '',
		results: [],
	});
	const [listDetailsCopy, setListDetailsCopy] = useState<ItemsResponseProps>({
		count: 0,
		next: '',
		previous: '',
		results: [],
	});
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (page: number) => {
		setCurrentPage(page);
		effect();
	};

	const effect = async () => {
		if (category === 'people')
			try {
				const response = await peopleAPI(currentPage);

				console.log(response);

				setListDetails(response);
				setListDetailsCopy(response);
			} catch (error) {
				toast.error('Error loading people');
			}

		if (category === 'planets')
			try {
				const response = await planetsAPI(currentPage);

				setListDetails(response);
				setListDetailsCopy(response);
			} catch (error) {
				toast.error('Error loading planets');
			}

		if (category === 'starships')
			try {
				const response = await starshipsAPI(currentPage);

				setListDetails(response);
				setListDetailsCopy(response);
			} catch (error) {
				toast.error('Error loading ships');
			}
	};

	useEffect(() => {
		effect();
	}, []);

	useEffect(() => {
		if (search === '') setListDetailsCopy(listDetails);
		else {
			const newList: any = searchFilter(listDetails.results, search, category ?? '');

			setListDetailsCopy({ ...listDetailsCopy, results: newList });
		}
	}, [search]);

	return (
		<div>
			<div className="flex flex-col lg:flex-row justify-between gap-4 mt-5">
				<h2 className="text-3xl font-bold capitalize">{category}</h2>
				<InputSearch search={search} setSearch={setSearch} />
			</div>
			<div className="my-5 border-t-2 border-gray-400 w-[300px]" />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
				{listDetailsCopy?.results &&
					listDetailsCopy.results.map((item: ItemsProps, index: number) => (
						<Card
							key={index}
							item={item}
							to={`/all/${category}/details${extractPart(item.url)}`}
							type={category ?? ''}
						/>
					))}
			</div>

			<div className="w-full flex justify-end mt-10">
				<Pagination
					currentPage={currentPage}
					onPageChange={onPageChange}
					showIcons
					totalPages={listDetails.count ? Math.round(listDetails.count / 10) : 0}
				/>
			</div>
		</div>
	);
};

export default ListAll;
