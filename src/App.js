import { Route, Routes } from 'react-router-dom';

//Components
import { Header } from './components/header';

//Pages
import { HomePage } from './pages/home-page';
import { GamePage } from './pages/game-page';
import { OrderPage } from './pages/order-page';

function App() {
	return (
		<div className='app'>
			<Header />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/app/:id' element={<GamePage />} />
				<Route path='/order' element={<OrderPage />} />
			</Routes>
		</div>
	);
}

export default App;
