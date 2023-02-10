import React from 'react';
import ReactDOM from 'react-dom/client';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

//Component
import App from './App';

//Router
import { BrowserRouter } from 'react-router-dom';

//Style
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
