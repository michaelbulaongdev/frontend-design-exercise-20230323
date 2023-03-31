import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
	return (
		<main>
			<Section1 />
			<Section2 />
			<Section3 />
			<footer className='attribution'>
				<a
					href='https://github.com/michaelbulaongdev/frontend-design-exercise-20230323'
					target='_blank'
					rel='noreferrer'>
					coded by michaelbulaongdev | github-repo
				</a>
			</footer>
		</main>
	);
}

export default App;
