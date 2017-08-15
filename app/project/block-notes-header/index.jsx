'use strict';

import React from "react";

import './style.scss';

import ButtonImage from '../../base/button-image';
import Textinput from '../../base/textinput';

export default class BlockNotesHeader extends React.Component{
	constructor(props){
		super(props);
		
		this.onPressEnter = this.onPressEnter.bind(this);
		this.selectAll = this.selectAll.bind(this);
	}
	
	selectAll(){
		this.props.actions.setCheckAll();
	}
	
	onPressEnter(c){
		let text = c.event.target.value.trim();
		if (text){
			this.props.actions.addTask(text);
			c.el.setValue('');
		}
	}
	
	render(){
		return (
			<div className="block-notes-header">
				<ButtonImage label="Mark all as completed" className="block-notes-header__select-all" onClick={this.selectAll} />
				<div className="block-notes-header__input-wrap">
					<Textinput className="block-notes-header__input" type="text" onPressEnter={this.onPressEnter} placeholder="What needs to be done?"/>
				</div>
			</div>
		);
	}
}