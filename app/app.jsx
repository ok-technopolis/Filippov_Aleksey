import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import tasks from './redux/tasks.js';

import './sass/style.scss';

import PageContainer from "./project/page-container";

const store = createStore(tasks);

document.addEventListener('DOMContentLoaded', function () {

ReactDOM.render(
	<Provider store={store}>
		<PageContainer />
	</Provider>
	, document.getElementById('container')
);

});