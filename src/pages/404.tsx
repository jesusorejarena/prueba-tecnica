/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageNotFound } from '../assets/images/images';
import { Card } from 'flowbite-react';

const Page404: FunctionComponent = () => {
	const navigate = useNavigate();

	const [seconds, setSeconds] = useState(5);

	useEffect(() => {
		const temporizador = setInterval(() => {
			setSeconds((prevSegundos) => prevSegundos - 1);
		}, 1000);

		if (seconds === 0) {
			clearInterval(temporizador);
			navigate('/');
		}

		return () => clearInterval(temporizador);
	}, [seconds]);

	return (
		<main className={`flex flex-col gap-y-10 items-center justify-center h-screen bg-primary`}>
			<div className="w-full max-w-[460px] max-h-[600px]">
				<Card>
					<div className="space-y-10 p-8 lg:p-14 flex flex-col items-center justify-center">
						<div
							className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
							role="alert"
						>
							<span className="font-medium">Error</span> page not found, redirect to {seconds} seconds
						</div>

						<img src={PageNotFound} className="max-w-[300px] max-h-[300px]" alt="Page Not Found" />
					</div>
				</Card>
			</div>
		</main>
	);
};

export default Page404;
