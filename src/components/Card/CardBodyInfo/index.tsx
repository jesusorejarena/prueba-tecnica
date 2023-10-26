/* eslint-disable @typescript-eslint/no-explicit-any */

const CardBodyInfo = ({ title, value }: any) => {
	return (
		<li>
			<span className="font-bold">{title.replaceAll('_', ' ')}:</span> {value}
		</li>
	);
};

export default CardBodyInfo;
