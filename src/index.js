import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


import routes from './routes';

injectTapEventPlugin();

// 把Router render 到畫面上
render (
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('root')
);
