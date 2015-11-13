import React, {Component} from 'react';
import {render} from 'react-dom';
import ActionCreator from './ActionCreator';
import AppStore from './AppStore';

function getState(){
	return {
		count: AppStore.getCount()
	}
}

export default class App extends Component{
	constructor(){
		super();
		this.state = getState();
		this.handleClick = this.handleClick.bind(this);
		this._onChange = this._onChange.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);

	}

   render(){
      return(
         <div className="App">
				<h1>Hello World</h1>
				<span>{this.state.count}</span>
				<button value={this.state.count} onClick={this.handleClick}>Increment Count!</button>
         </div>
      );
   }

	componentDidMount(){
		AppStore.addChangeListener(this._onChange);
	}

	_onChange() {
	this.setState(getState());
		console.log('changing', this.state);
 	}

	handleClick(e){
		ActionCreator.incrementCount(e.target.value);
	}
}
