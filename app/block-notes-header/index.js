'use strict';

import React from "react";

import './style.scss';

export default class BlockNotesHeader extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			value: '',
			hidePlaceholder: false
		}
		
		this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.getPlaceholderClasses = this.getPlaceholderClasses.bind(this);
	}
	
	onChangeHandler(e){
		this.setState({
			hidePlaceholder: e.target.value.length > 0,
			value: e.target.value
		});
	}
	
	onKeyPressHandler(e){
		if (e.which == 13 || e.keyCode == 13) {
			if (e.target.value.trim()){
				// notes.add(this.value);
				if (typeof this.props.addNote == 'function'){
					this.props.addNote(e.target.value.trim());
				}
				
				this.setState({
					hidePlaceholder: false,
					value: ''
				});
			}
		}
	}
	
	getPlaceholderClasses(){
		let classes = 'block-notes-header__placeholder';
		if (this.state.hidePlaceholder){
			classes += ' placeholder_unvisible';
		}
		return classes;
	}
	
	render(){
		return (
			<div className="block-notes-header">
				<div className="block-notes-header__icon" id="select-all"></div>
				<div className="block-notes-header__group">
					<div className={this.getPlaceholderClasses()}>{this.props.text}</div>
					<input className="block-notes-header__input" type="text" value={this.state.value} onKeyPress={this.onKeyPressHandler} onChange={this.onChangeHandler}/>
				</div>
			</div>
		);
	}
}