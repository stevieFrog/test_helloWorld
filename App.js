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
				songs: [
					{name: 'Beat It', duration: 341},
					{name: 'Push', duration: 784},
					{name: 'Fake It', duration: 315}
				]
			},
			{
				name: 'Discover Weekly',
				songs: [
					{name: 'Mario Bros', duration: 6400},
					{name: 'Luigi Sings', duration: 187},
					{name: 'Zelda Raps', duration: 140}
				]
			},
			{
				name: 'Zero',
				songs: [
					{name: 'Mario Bros', duration: 240},
					{name: 'Luigi Sings', duration: 187},
					{name: 'Zelda Raps', duration: 140}
				]
			},
			{
				name: 'One',
				songs: [
					{name: 'Mario Bros', duration: 240},
					{name: 'Luigi Sings', duration: 187},
					{name: 'Zelda Raps', duration: 140}
				]
			},
		]
	}
	
}


class PlaylistCounter extends Component{
	render() {
		return(
			<div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
				<h2>{this.props.playlists && this.props.playlists.length} Playlists</h2>
			</div>
		);
	}
}

class HoursCounter extends Component{
	render() {
		let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
			return songs.concat(eachPlaylist.songs)
		}, []);
		let totalAllPlaylistsDuration = allSongs.reduce((sum , eachSong) => {
			return sum + eachSong.duration
		}, 0)
		return(
			<div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
				<h2>
					{Math.round(totalAllPlaylistsDuration/3600,2)} hours
				</h2>
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
		setTimeout(() => {
			this.setState({serverData: fakeServerData});
			}
		, 1500);
  	};
  render() {
    return (
		<div className="App">
			{this.state.serverData.user ?	
				<div>
					<h1 style={{...defaultStyle, 'font-size': '54px'}}>
						{this.state.serverData.user.name}'s Playlist
					</h1>
					<PlaylistCounter playlists={this.state.serverData.user.playlists}/>
					<HoursCounter playlists={this.state.serverData.user.playlists}/>
					<Filter/>
					<Playlist/>
					<Playlist/>
					<Playlist/>
					<Playlist/>
				</div> : <h1 style={defaultStyle}>Loading....</h1>
		}
      </div>
    );
  }
}

export default App;
