import pic1 from '../images/pic1.jpg';
import {Box, Grid} from '@mui/material';

export default function Section1() {
	return (
		<section className='section1'>
			<Box sx={{maxWidth: 'md', p: 3, m: '0 auto'}}>
				<Grid container>
					<Grid
						item
						sm={6}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							pr: 3,
						}}>
						<h1 className='section1-title'>RTO Registration Made Easy</h1>
						<p className='section1-text'>
							Setting up an RTO can be a challenging and overwhelming task. Even
							if you worked in the industry for years, the many rules and
							regulations governing registration as an RTO and daily operations
							can still be confusing. RTO2GO has the knowledge and experience to
							smooth out the process for you. Whether you just want advice or
							you would like us to manage your entire RTO registration process,
							let us know and we'll help you achieve your goals.
						</p>
					</Grid>
					<Grid
						item
						sm={6}
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<img className='section1-pic' src={pic1} alt='' />
					</Grid>
				</Grid>
			</Box>
		</section>
	);
}
