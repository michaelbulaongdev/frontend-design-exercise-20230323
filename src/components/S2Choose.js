import {Box} from '@mui/material';

export default function S2Choose() {
	return (
		<Box className='s2choose' sx={{maxWidth: 'md', p: 3, m: '0 auto'}}>
			<Box px={{md: 15}}>
				<h4>Your RTO Registration Package</h4>
				<h2 className='s2choose-title'>
					Choose The New Registration Package That Meets Your Needs!
				</h2>
			</Box>
			<Box px={{sm: 20, md: 35}} sx={{position: 'relative', bottom: '20px'}}>
				<p className='s2choose-text'>
					All packages include full training and consultation series on RTO
					registration and expert advice and guidance.
				</p>
			</Box>
			<div className='card'>
				<h4 className='card-title'>RTO2GO DIY</h4>
				<p className='card-text'>
					Launch your RTO with the help of guiding documents and instructions to
					complete to help you with every step of the RTO registration process.
					This package includes access to our easy-to-navigate "Build an RTO"
					Learning Hub and four consultation hours with an RTO registration
					industry expert.
				</p>
				<div className='card-bottom'>
					<div>
						<p>start at</p>
						<p className='card-price'>$16,900</p>
					</div>
					<button className='btn-enquire'>Enquire Now</button>
					<button className='btn-buy'>Buy Now</button>
				</div>
			</div>
		</Box>
	);
}
