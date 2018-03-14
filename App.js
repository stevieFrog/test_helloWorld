import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColour = '#696969';

let defaultStyle = {
	color: defaultTextColour
};

let fakeServerData = {
	user: {
		name: 'Steve',
		playlists: [
			{
				name: 'My favorites',
				songs: ['Beat It', 'Push', 'Fake It']
			},
			{
				name: 'Discover Weekly',
				songs: ['Mario Bros','Luigi Sings','Zelda Raps']
			},
			{
				name: 'Zero',
				songs: ['Mario Bros','Luigi Sings','Zelda Raps']
			},
			{
				name: 'One',
				songs: ['Mario Bros','Luigi Sings','Zelda Raps']
			},
		]
	}
	
}


class Aggregate extends Component{
	render() {
		return(
			<div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
				<h2>Number and Text</h2>
			</div>
		);
	}
}

class Filter extends Component {
	render() {
		return(
			<div style={defaultStyle}>
				<img/>
				<input type="text"/>
				
			</div>
		)
	}
}

class Playlist extends Component {
	render() {
		return(
			<div style={{...defaultStyle, display: 'inline-block', width: "20%"}}>
				<img/>
				<h3> Playlist Name</h3>
				<ul><li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 4</li></ul>
			</div>
		);
		
	}
	
}

class App extends Component {
	constructor(){
		super();
		this.state = {serverData: {}}
	};
  	componentDidMount(){
		this.setState({serverData: fakeServerData});
  	};
  render() {
    return (
      <div className="App">
		<h1 style={{...defaultStyle, 'font-size': '54px'}}>
			{this.state.serverData.user && 
			this.state.serverData.user.name}'s Playlist</h1>
		<Aggregate/>
		<Aggregate/>
		<Filter/>
		<Playlist/>
		<Playlist/>
		<Playlist/>
		<Playlist/>
      </div>
    );
  }
}

export default App;
