import { TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
import { InputSearchProps } from '../../types/components';

export default function InputSearch({ search, setSearch }: InputSearchProps) {
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
