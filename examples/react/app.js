// app.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import Shorti from 'shorti';

class App extends Component {

render(){

  let style = Shorti('w-500 h-210 p-40 font-50 relative t-100 l-50p ml-n205 border-top-1-dashed-ddd');

    return <div style={ style }>
      Hello world
    </div>;
  }

};

render(
<App />,
  document.getElementById('app-root')
);