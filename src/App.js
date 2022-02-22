import React, { Component } from 'react';
import './App.css'; 

import AppRouter from './component/route/RouterComponent';
import NavBar from "./component/route/NavBar";
import Container from '@material-ui/core/Container';

//calendar
import "react-date-range/dist/styles.css";
import 'react-date-range/dist/theme/default.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />

				<Container>
					<AppRouter />
				</Container>
			</div>
		);
	}
}

export default App;