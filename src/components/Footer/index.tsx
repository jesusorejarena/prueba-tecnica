import { FunctionComponent } from 'react';

import { Facebook, Twitter } from '../../assets/icons/icons';

const Footer: FunctionComponent = () => {
	return (
		<footer className="bg-[#052C43] px-10">
			<div className="mx-auto w-full flex flex-col md:p-4 py-6 md:py-8">
				<div className="flex flex-col md:flex-row md:justify-start md:space-x-48">
					<div className="mb-10 md:mb-0">
						<a href="https://www.postercompliance.com" target="_blank" className="flex items-center">
							{/* <img
                src={PCCLogoWhite}
                alt="Logo"
                className="cursor-pointer mr-3"
                width={78}
              /> */}
						</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28">
						<div>
							<h2 className="mb-6 text-sm font-bold uppercase text-white">LEGAL</h2>
							<ul className="text-[#D4DDF2] font-normal">
								<li className="mb-4">
									<a href="/terms-and-conditions-of-sale" className="hover:underline">
										Terms and Conditions of Sale
									</a>
								</li>
								<li>
									<a href="/privacy-policy" className="hover:underline">
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-bold uppercase text-white">SOCIAL MEDIA</h2>
							<div className="flex space-x-3">
								<a href="https://www.facebook.com/postercompliancecenter/">
									<img src={Facebook} alt="Facebook" />
								</a>
								<a href="https://twitter.com/postercompctr">
									<img src={Twitter} alt="Twitter" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-6 border-[#17394C] sm:mx-auto md:mb-4 md:mt-24" />
				<span className="flex flex-col md:flex-row text-sm text-[#D4DDF2] font-bold">
					Poster Compliance Center
					<span className="text-[#8CA0CC] md:pl-4 font-normal">Copyright © {new Date().getFullYear()}</span>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
