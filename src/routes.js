import React from 'react';
import { Route, Link, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import EntryPage from './components/EntryPage';
import App from './components/App';
import AlbumPage from './components/AlbumPage';
import NotFoundPage from './components/NotFoundPage';



export default (
  <Route path="/">
   <IndexRedirect to="/entry"/>
   <Route path="/entry" component={EntryPage}/>
   <Route path="/albums" component={App}>
   		<Route path="/albums/:albumname" component={AlbumPage}/>
    	
   </Route>
   /* 到最後都沒有 match 出現 404 畫面 */
   <Route path="*" component={NotFoundPage}/>
  </Route>
  
);