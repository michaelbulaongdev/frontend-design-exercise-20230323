import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Box, Grid} from '@mui/material';

const list1 = [
	'Business plans',
	'Modeling',
	'Course development',
	'Industry consultation',
];

const list2 = [
	'RTO registration project planning and management',
	'RTO policies and procedures',
	'RTO recruitment, labour services and human resource management',
	'Marketing and industry advice',
];

export default function S2Launch() {
	return (
		<Box sx={{maxWidth: 'md', p: 3, m: '0 auto'}}>
			<h4>Become an RTO</h4>
			<h2 className='s2launch-title'>Launch Your RTO With Ease!</h2>
			<p>
				RTO2GO has gone through several RTO registrations as an RTO owner &
				operator, and has the knowledge and experience to smooth out the process
				for you. We will work with you at any and all stages of the process, as
				you prepare documents required for RTO registration, subit your
				application for RTO registration online, undertake your first audit,
				complete your initial RTO registration period, get your RTO registered,
				and long into the future.
			</p>
			<Grid container py={1} spacing={{md: 10}}>
				<Grid item>
					{list1.map((item) => {
						return (
							<div className='list-item'>
								<CheckCircleIcon className='check-icon' />
								<p className='list-item-text'>{item}</p>
							</div>
						);
					})}
				</Grid>
				<Grid item>
					{list2.map((item) => {
						return (
							<div className='list-item'>
								<CheckCircleIcon className='check-icon' />
								<p className='list-item-text'>{item}</p>
							</div>
						);
					})}
				</Grid>
			</Grid>
			<p>
				Whether you just want advice, or you would like us to manage your entire
				RTO registration process (set up the RTO for you), contact us today to
				let us know how we can help you achieve your goals.
			</p>
		</Box>
	);
}
