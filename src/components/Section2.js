import S2Launch from './S2Launch';
import S2Choose from './S2Choose';
import {Box} from '@mui/material';

export default function Section2() {
	return (
		<section className='section2'>
			<Box sx={{maxWidth: 'md', p: 3, m: '0 auto'}}>
				<S2Launch />
				<S2Choose />
			</Box>
		</section>
	);
}
