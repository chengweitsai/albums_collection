import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// 把Router render 到畫面上
render (
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('root')
);