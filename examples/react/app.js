// app.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import Shorti from 'shorti';

class App extends Component {

	render(){

		let style = Shorti('w-500 h-210 p-40 font-50 relative t-100 l-50 solid bw-1 bc-ccc');

		return <div style={ style }>
			Hello world
		</div>;
	}

};

render(
	<App />,
	document.getElementById('app-root')
);