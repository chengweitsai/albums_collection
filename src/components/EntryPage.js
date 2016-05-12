import React, { Component } from 'react';
import {Link} from 'react-router';


class EntryPage extends Component {

	render() {
		return (
			<div className="container-fluid  text-center">
				<h1>Albums Collection</h1>
				<div>   </div>
				<div className="row">
					<div className="col-sm-4 col-sm-offset-4">
						<div className="input-group">
		  					<span className="input-group-addon" id="basic-addon1">Username</span>
		  					<input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
						</div>
					</div>
				</div>
				<p>   </p>
				<div className="row">
					<div className="col-sm-4 col-sm-offset-4">
						<div className="input-group">
							<span className="input-group-addon" id="basic-addon2">Passwords</span>
		  					<input type="text" className="form-control" placeholder="Passwords" aria-describedby="basic-addon1"/>
		  				</div>
		  			</div>
				</div>	
				<p>   </p>
				<div className="row">
					<div className="btn-group btn-group-lg">
						 <Link to="/albums">
						 	<button type="button" className="btn btn-primary">Loggin In</button>
						 </Link>
					</div>
				</div>

			</div>
		);
	}
}


export default EntryPage;