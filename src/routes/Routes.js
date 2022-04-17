import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../view/home';

export const Routes = (props) => {
	return (
		<Router>
			{props.children}
			<Switch>
				<Route exact path={'/home'} component={Home} />
				<Route component={Home} />
			</Switch>
		</Router>
	)
}