import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import Albums from '../Albums';
import AlbumItem from './AlbumItem';


export default class App extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  
  constructor(props) {
    super(props);
    this.state = {
      albums: Albums,
      play_a: 2,
      play_s: 2,
      cursor:0,
    }
  }
  handleClickAlbum (index) {
    this.setState ( {play_a:index} );
  }

  renderAlbum (album, i) {
    const {name, Author, songs} = album;
    return (
      <AlbumItem 
        key={i}
        name={name}
        Author={Author}
        songs={songs}
        onClick={this.handleClickAlbum.bind(this,i)}
      />);
  }

  render() {
    const {albums, play_a, play_s, cursor} = this.state;
    const playing_album = albums[play_a].name;
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-9"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
              <ul className="nav navbar-nav">
              <li><IndexLink to="/albums" activeClassName="active">albums</IndexLink></li>
              </ul>
              <ul className="nav navbar-nav">
              <li>
                <h2> Now Playing:   {playing_album} </h2>
              </li>
              </ul>
            </div>

            
          </div>
        </nav>
       
        {/*render child*/}
        <div className="row">
        {albums.map(this.renderAlbum, this)}
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
