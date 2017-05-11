'use strict';

import React from "react";

import './style.scss';

export default class Header extends React.Component{
	render(){
		return (
			<div className="header">
				<h1 className="header__title">todos</h1>
			</div>
		);
	}
}