import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import AlbumItem from './AlbumItem';
import Albums from '../Albums';

export default class MainPage extends Component {
    
      

	renderExtend() {
		return (
			<div className="row">
				<div className="col-sm-12">
					<h1> extend section </h1>
				</div>
			</div>
		);
	}

	render() {
        console.log(this.state);
        //const {albums, play_a} = this.props;
        //const {name, Author, songs, extend} = albums[play_a];
		return (
			<div className="container-fluid">
                <h1>Main Page</h1>
			</div>
		);
	}
}