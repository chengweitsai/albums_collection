import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import './AlbumItem.css'

export default class AlbumItem extends Component {

	handleExtend () {
		const {name, Author, songs, extend} = this.props;
			return(
				<div>
				
				</div>
			);
	}d

	renderSpace() {
		return(
			<div> </div>
		);
	}

	renderSongs (song, i) {
		const {name, playing} = song;
		return (
			<div>
				<h1>{name}</h1>
			</div>
		);
	}

	render () {
		const {name, Author, songs, onClick, extend} = this.props;
		let path = '/albums/' +name;
		return (
			<div className="album-item">
			<div className="col-sm-4" >
				<h3 onClick={onClick}>{name}</h3>
				<h3>{Author}</h3>
				<Link to={path}><p>more....</p></Link>
				<p onClick={this.handleExtend.bind(this) }>extend</p>
				{ extend ? songs.map(this.renderSongs, this) : this.renderSpace}
				<div className="extend">
					<h1> extend section</h1>
				</div>
			</div>
			</div>
		);
	}
}

AlbumItem.PropTypes = {
	name: PropTypes.string,
	Author: PropTypes.string,
	songs: PropTypes.array,
}