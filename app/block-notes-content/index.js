'use strict';

import React from "react";

import './style.scss';

import OneTask from '../one-task';
import BlockNotesFooter from '../block-notes-footer';

export default class BlockNotesContent extends React.Component{
	children = [];
	
	constructor(props){
		super(props);
		
		this.addNote = this.addNote.bind(this);
		this.getChildren = this.getChildren.bind(this);
		
		this.addNote('text 1');
		this.addNote('text 2');
	}
	
	addNote(text){
		if (text.trim().length == 0) return;
		
		this.children.splice(0, 0, {key: this.getUniqId(), text: text});
		console.log(this.children)
		
		this.forceUpdate();
	}
	
	id = 1;
	
	getUniqId(){
		return this.id++;
	}
	
	getChildren(){
		let children = [];	
		this.children.forEach(function(item, i, a){
			children.push(<OneTask key={item.key} text={item.text} />);
		});
		console.log(children);
		return children;
	}
	
	render(){
		//{this.props.todos.map(item => <OneTask key={item.key} text={item.text} />)}
		return (
			<div className="block-notes-content">
				<div className="block-notes-content__tasks">
					{this.getChildren()}
				</div>
				<div className="block-notes-content__footer">
					<BlockNotesFooter />
				</div>
			</div>
		);
	}
}