'use strict';

import React from "react";

import "./style.scss";

export default class Button extends React.Component{
	getClasses(){
		let cls = 'button';
		let classes = cls;
		if (typeof this.props.className == 'string'){
			classes += ' ' + this.props.className;
		}
		return classes;
	}

	render(){
		return (
			<button className={this.getClasses()} aria-label={this.props.label} onClick={this.props.onClick}>{this.props.text}</button>);
	}
}