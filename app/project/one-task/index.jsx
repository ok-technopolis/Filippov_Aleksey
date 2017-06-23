'use strict';

import React from "react";

import './style.scss';

import CheckboxMain from '../../base/checkbox_main';
import ButtonImage from '../../base/button-image';
import Textinput from '../../base/textinput';

export default class OneTask extends React.Component{
	constructor(props){
		super(props);
		this.id = props.id;
		
		this.onChangeText = this.onChangeText.bind(this);
		this.onChangeCheckHandler = this.onChangeCheckHandler.bind(this);
		this.onRemoveClick = this.onRemoveClick.bind(this);
	}

	onChangeText(event){
		this.props.actions.editTask(this.id, event.target.value);
	}
	
	onChangeCheckHandler(checked){
		this.props.actions.setCheck(this.id, checked);
	}
	
	onRemoveClick(){
		this.props.actions.removeTask(this.id);
	}
	
	render(){		
		let cls = 'one-task';
		if (this.props.checked){
			cls += ' one-task_checked';
		}
		
		return (
			<div className={cls}>
				<CheckboxMain className="one-task__checkbox" label="Mark as complete" checked={this.props.checked} onChangeCheck={this.onChangeCheckHandler}/>
				<ButtonImage className="one-task__remove" label="Remove this task" onClick={this.onRemoveClick} />
				<div className="one-task__input-wrap">
					<Textinput className="one-task__input" type="textarea" value={this.props.text} onChange={this.onChangeText}/>
				</div>
			</div>);
	}
}