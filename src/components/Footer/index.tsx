import { FunctionComponent } from 'react';

import { Facebook, Twitter } from '../../assets/icons/icons';
import { Link } from 'react-router-dom';

const Footer: FunctionComponent = () => {
	return (
		<footer className="bg-gray-800 px-10">
			<div className="mx-auto w-full flex flex-col md:p-4 py-6 md:py-8">
				<div className="flex flex-col md:flex-row md:justify-start md:space-x-48">
					<div className="mb-10 md:mb-0">
						<Link to="/" target="_blank" className="flex items-cente text-white text-3xl">
							Manosos SPA
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28">
						<div>
							<h2 className="mb-6 text-sm font-bold uppercase text-white">LEGAL</h2>
							<ul className="text-[#D4DDF2] font-normal">
								<li className="mb-4">
									<Link to="/" className="hover:underline">
										Terms and Conditions of Sale
									</Link>
								</li>
								<li>
									<Link to="/" className="hover:underline">
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-bold uppercase text-white">SOCIAL MEDIA</h2>
							<div className="flex space-x-3">
								<Link to="/">
									<img src={Facebook} alt="Facebook" />
								</Link>
								<Link to="/">
									<img src={Twitter} alt="Twitter" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-500 sm:mx-auto md:mb-4 md:mt-24" />
				<span className="flex flex-col md:flex-row text-sm text-[#D4DDF2] font-bold">
					Manosos SPA
					<span className="text-[#8CA0CC] md:pl-4 font-normal">Copyright © {new Date().getFullYear()}</span>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
