import { CardBodyInfoProps } from '../../../types/components';

const CardBodyInfo = ({ title, value }: CardBodyInfoProps) => {
	return (
		<li>
			<span className="font-bold">{title.replaceAll('_', ' ')}:</span> {value}
		</li>
	);
};

export default CardBodyInfo;
