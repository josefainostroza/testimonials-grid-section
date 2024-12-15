import Button from './components/button/Button';
import CardsContainer from './components/cardsContainer/CardsContainer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<CardsContainer></CardsContainer>
		</div>
	);
};

export default App;
