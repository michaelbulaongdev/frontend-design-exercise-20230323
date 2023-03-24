import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const check = <CheckCircleIcon className='check-icon' />;
const rtu = 'Ready-to-use';
const ao = 'Add-on; can be purchased separately';

export const tableList = [
	{
		id: 1,
		col1: 'Completion of paperwork for submission',
		col2: check,
	},
	{
		id: 2,
		col1: 'Compliant Policies and Procedures templates',
		col2: rtu,
	},
	{
		id: 3,
		col1: 'Ongoing compliance document templates',
		col2: rtu,
	},
	{
		id: 4,
		col1: 'Casual contracts and employment contract templates',
		col2: check,
	},
	{
		id: 5,
		col1: 'Mock audit against the latest RTO and/or ESOS standards',
		col2: check,
	},
	{
		id: 6,
		col1: 'Guide documents with instructions and guidance on how to complete every step of the RTO registration process',
		col2: check,
	},
	{
		id: 7,
		col1: 'Easy to navigate "Build an RTO" Learning Hub',
		col2: check,
	},
	{
		id: 8,
		col1: 'Submit evidence documents quickly and easily online',
		col2: check,
	},
	{
		id: 9,
		col1: 'Extra consultation hours bundle',
		col2: ao,
	},
	{
		id: 10,
		col1: 'Penalty-free upgrade option',
		col2: ao,
	},
	{
		id: 11,
		col1: 'Document customization add-on',
		col2: ao,
	},
	{
		id: 12,
		col1: 'Feedback on each stage of the process',
		col2: ao,
	},
];
