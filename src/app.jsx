import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import history from './history.js';
import HelloSacc from './page/HelloSacc.jsx'

class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<Router history={history}>
						<Route exact path="/" component={HelloSacc}/>
				</Router>
			</Provider>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
connect(mapStateToProps,mapDispatchToProps)(App);
ReactDOM.render(
	<App/>,
	document.getElementById('app')
)