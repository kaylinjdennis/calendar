import React from "react";
import WeekView from './components/WeekView';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={WeekView} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;