/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';

export default function InputSearch({ search, setSearch }: any) {
	return (
		<TextInput
			type="text"
			id="search"
			placeholder="Search..."
			rightIcon={FaSearch}
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>
	);
}
