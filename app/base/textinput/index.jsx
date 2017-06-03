'use strict';

import React from "react";
import Textarea from 'react-textarea-autosize';

import "./style.scss";

export default class Textinput extends React.Component{
	constructor(props){
		super(props);
		
		if (props.type){
			this.type = props.type;
		}
		
		this.placeholder = (props.placeholder) ? props.placeholder : '';
		
		this.state = {
			value: (props.value) ? props.value : ''
		}
		
		this.onKeyPress = this.onKeyPress.bind(this);
		this.getClasses = this.getClasses.bind(this);
		this.setValue = this.setValue.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	
	type = 'text';
	
	onKeyPress(event){
		event.persist();
		if ((event.which == 13 || event.keyCode == 13) && (typeof this.props.onPressEnter == 'function')) {
			this.props.onPressEnter({
				event: event,
				el: this
			});
		}
	}
	
	setValue(text){
		this.setState({value: text});
	}
	
	onChange(event){
		event.persist();
		this.setState({value: event.target.value}, () => {
			if (typeof this.props.onChange == 'function'){
				this.props.onChange(event);
			}
		});
	}
	
	getClasses(){
		let cls = 'textinput';
		if (this.props.className){
			cls += ' ' + this.props.className;
		}
		return cls;
	}

	render(){
		switch (this.type) {
			case 'text':
				return (<input className={this.getClasses()} aria-label={this.props.label} placeholder={this.placeholder} onChange={this.onChange} onKeyPress={this.onKeyPress} value={this.state.value}/>);
			case 'textarea':
				return (<Textarea className={this.getClasses()} aria-label={this.props.label} placeholder={this.placeholder} onChange={this.onChange} onKeyPress={this.onKeyPress} value={this.state.value}/>);
		}
	}
}