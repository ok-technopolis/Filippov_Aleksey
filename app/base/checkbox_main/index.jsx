'use strict';

import React from "react";

import Checkbox from '../checkbox';

import "./style.scss";

export default class CheckboxMain extends React.Component{
	// getType(){
	// 	if (typeof this.props.type == 'string'){
	// 		return this.props.type.split(' ').reduce((prev, current) => {
	// 			return prev + ' ' + current;
	// 		}, 'main').trim();
	// 	}
	// 	return '';
	// }
	
	render(){
		return (
			<Checkbox className={this.props.className} type="main" label={this.props.label} checked={this.props.checked} onChangeCheck={this.props.onChangeCheck}/>);
	}
}