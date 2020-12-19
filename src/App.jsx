import React from 'react';
import { MainPage, Question, Question10, Question11, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Rules } from './pages';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/q1" component={Question} />
				<Route path="/q2" component={Question2} />
				<Route path="/q3" component={Question3} />
				<Route path="/q4" component={Question4} />
				<Route path="/q5" component={Question5} />
				<Route path="/q6" component={Question6} />
				<Route path="/q7" component={Question7} />
				<Route path="/q8" component={Question8} />
				<Route path="/q9" component={Question9} />
				<Route path="/q10" component={Question10} />
				<Route path="/congratulations" component={Question11} />
				<Route path="/secret" component={MainPage} />
				<Route exact path="/" component={Rules} />
			</Switch>
		</Router>
	);
}

export default App;
