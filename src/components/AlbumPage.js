import React, { Component, PropTypes } from 'react';

const AlbumPage = ({ params }) => {
	
	return (
		<div className="container-fluid">
			<div className="row">
				<h1>  HELLO</h1>
			</div>
		</div>
	);
}

AlbumPage.PropTypes = {
	params: PropTypes.object.isRequired
}

export default AlbumPage