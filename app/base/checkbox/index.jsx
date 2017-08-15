'use strict';

import React from "react";

import "./style.scss";

export default class Checkbox extends React.Component{
	constructor(props){
		super(props);
		
		this.toggleChange = this.toggleChange.bind(this);
		this.getClasses = this.getClasses.bind(this);
	}

	toggleChange(event){
		if (typeof this.props.onChangeCheck == 'function'){
			this.props.onChangeCheck(event.target.checked);
		}
	}
	
	getClasses(){
		let cls = 'checkbox';
		let classes = cls;
		if (typeof this.props.type == 'string'){
			this.props.type.split(' ').forEach((el) => {
				classes += ' ' + cls + '_' + el;
			});
		}
		if (typeof this.props.className == 'string'){
			classes += ' ' + this.props.className;
		}
		return classes;
	}

	render(){
		return (
			<div className={this.getClasses()}>
				<input className="checkbox__input" type="checkbox" aria-label={this.props.label} checked={this.props.checked} onChange={this.toggleChange}/>
				<div className="checkbox__image"></div>
			</div>);
	}
}