import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';


export default class AlbumItem extends Component {

	renderSongs (song, i) {
		const {name, playing} = song;
		return (
			<div>
				<h1>{name}</h1>
			</div>
		);
	}

	render () {
		const {name, Author, songs, onClick} = this.props;
		let path = '/albums/' +name;
		return (
			<div className="col-sm-3" onClick={onClick}>
				<h3>{name}</h3>
				<h3>{Author}</h3>
				<Link to={path}><p>more....</p></Link>
			</div>
		);
	}
}

AlbumItem.PropTypes = {
	name: PropTypes.string,
	Author: PropTypes.string,
	songs: PropTypes.array,
}