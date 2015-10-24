// app.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Shorty from 'shorti';

class App extends Component {

	render(){

		let style = Shorty('w-500 h-210 p-40 font-50 relative t-100 l-50p ml-n205 left border-box pointer');
		style.border = '1px solid #333';

		return <div style={ style }>
			Hello world
		</div>;
	}

};

ReactDOM.render(
	<App />,
	document.getElementById('app-root')
);