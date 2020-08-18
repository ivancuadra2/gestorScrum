import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './Views/LogIn';
import Main from './Views/Main/Main';
import promoScrum from './Views/ScrumPromo/App';

//firebase.initializeApp(firebaseConfig)

function App() {
	return (
		<div>
			<BrowserRouter>
				<Route path="/Login" component={SignUp} exact />
				<Route path="/Main" component={Main} exact />
				<Route path="/" component={promoScrum} exact />
			</BrowserRouter>
		</div>


	);
}

export default App;
