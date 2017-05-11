'use strict';

import React from "react";

import './style.scss';

export default class GroupOfButtons extends React.Component{
	render(){
		return (
			<ul className="group-of-buttons">
				<li className="group-of-buttons__button button_active">All</li>
				<li className="group-of-buttons__button">Active</li>
				<li className="group-of-buttons__button">Completed</li>
			</ul>
		);
	}
}