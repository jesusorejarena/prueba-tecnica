import { Spinner } from 'flowbite-react';

const Loader = () => {
	return (
		<div className="flex items-center w-full h-full justify-center gap-x-10 absolute top-0 left-0">
			<div className="bg-gray-100 w-[150px] h-[150px] p-6 rounded-xl flex flex-col items-center justify-center gap-5">
				<Spinner color="white" size="md" />
				<p>Loading</p>
			</div>
		</div>
	);
};

export default Loader;
