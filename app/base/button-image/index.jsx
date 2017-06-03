'use strict';

import React from "react";

import "./style.scss";

export default class ButtonImage extends React.Component{
	getClasses(){
		let cls = 'button-image';
		let classes = cls;
		if (typeof this.props.className == 'string'){
			classes += ' ' + this.props.className;
		}
		return classes;
	}

	render(){
		return (
			<button className={this.getClasses()} aria-label={this.props.label} onClick={this.props.onClick}></button>);
	}
}