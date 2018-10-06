import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content';
// import Bodycontent from './Components/Body-content';

class App extends Component {
  render() {
	return (
		<div className="App">
			<header className="App-header" id="header">
				<Content/>
			</header>        
				
	  	</div>
	);
  }
}

export default App;
