import {Box} from '@mui/material';
import {tableList} from './S3TableList';

export default function Section3() {
	return (
		<section className='section3'>
			<Box sx={{maxWidth: 'md', p: 3, m: '0 auto'}}>
				<table className='s3table'>
					<tr>
						<th className='s3table-col1'>
							<h3>PACKAGE INCLUSIONS</h3>
						</th>
						<th className='s3table-col2'>
							<div>
								<p className='th-text'>RTO2GO DIY</p>
								<button className='th-btn'>Get Started</button>
							</div>
						</th>
						<th className='s3table-col3'>{null}</th>
					</tr>
					{tableList.map((item) => {
						return (
							<tr className='s3table-row' key={item.id}>
								<td className='s3table-col1 col1-text'>{item.col1}</td>
								<td className='s3table-col2 col2-text'>{item.col2}</td>
								<td className='s3table-col3'>{null}</td>
							</tr>
						);
					})}
				</table>
			</Box>
		</section>
	);
}
