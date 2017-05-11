import React from "react";
import ReactDOM from "react-dom";

import './style.scss';

import PageContainer from "./page-container";

document.addEventListener('DOMContentLoaded', function () {
	
	ReactDOM.render(<PageContainer />, document.getElementById('container'));

});