import { Toaster } from 'sonner';
import RouterIndex from './routes';

export default function App() {
	return (
		<>
			<Toaster richColors />
			<RouterIndex />
		</>
	);
}
