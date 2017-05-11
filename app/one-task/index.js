'use strict';

import React from "react";

import './style.scss';

import InputCheckbox from '../input_checkbox';

export default class OneTask extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			value: props.text || '',
			edited: false,
			checked: false
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.onChangeCheckHandler = this.onChangeCheckHandler.bind(this);
		this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
		this.startEdit = this.startEdit.bind(this);
		this.stopEdit = this.stopEdit.bind(this);
		this.getClasses = this.getClasses.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.value}, () => {
			console.log(this.state.value);
		});
	}
	
	onChangeCheckHandler(checked){
		this.setState({checked: checked});
		console.log(checked);
	}
	
	onKeyPressHandler(e){
		if (e.which == 13 || e.keyCode == 13) {
			this.stopEdit();
		}
	}
	
	startEdit(){
		this.setState({edited: true}, () => {
			this.textInput.focus();
		});
	}
	
	stopEdit(){
		this.setState({edited: false});
	}
	
	getClasses(){
		let classes = 'one-task';
		if (this.state.checked){
			classes += ' one-task_checked';
		}
		if (this.state.edited){
			classes += ' one-task_editable';
		}
		return classes;
	}
	
	render(){
		return (
			<div className={this.getClasses()} data-value={this.state.value}>
				<InputCheckbox onChangeCheck={this.onChangeCheckHandler}/>
				<div className="one-task__remove"></div>
				<div className="one-task__textgroup" onDoubleClick={this.startEdit}>
					<div className="one-task__text">{this.state.value}</div>
					<input className="one-task__input" type="text" value={this.state.value} onChange={this.handleChange} onBlur={this.stopEdit} onKeyPress={this.onKeyPressHandler} ref={input => this.textInput = input}/>
				</div>
			</div>);
	}
}