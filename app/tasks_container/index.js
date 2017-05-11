'use strict';

import React from "react";

import OneTask from '../one_task';

export default class TasksContainer extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			children: [],
			ids: 1
		};
		this.state.children.push('text 1');
		this.state.children.push('text 2');
		
		
	}
	
	getUniqId(){
		return ++this.state.ids;
	}
	
	render(){
		let children = [];
		
		for (let i = 0; i < this.state.children.length; i++){
			children.push(<OneTask key={this.getUniqId()} text={this.state.children[i]} />);
		}
		
		console.log(children)
		
		return (
			<div className="block-notes-content__tasks" id="tasks-container">
				{children}
			</div>);
	}
}