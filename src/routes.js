import React from 'react';
import { Route, Link, IndexRoute, Redirect } from 'react-router';
import NotFoundPage from './components/NotFoundPage';



export default (
  <Route path="/">

     
    /* 到最後都沒有 match 出現 404 畫面 */
   <Route path="*" component={NotFoundPage}/>
  </Route>
  
);