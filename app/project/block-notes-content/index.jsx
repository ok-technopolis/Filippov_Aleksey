'use strict';

import React from "react";

import './style.scss';

import OneTask from '../one-task';
import FilterAction from '../filterAction.js';

export default class BlockNotesContent extends React.Component{
	render(){
		let tasksFiltered;
		switch (this.props.type) {
			case FilterAction.SHOW_ALL:
				tasksFiltered = this.props.tasks;
				break;
			case FilterAction.SHOW_ACTIVE:
				tasksFiltered = this.props.tasks.filter(item => !item.checked);
				break;
			case FilterAction.SHOW_COMPLETED:
				tasksFiltered = this.props.tasks.filter(item => item.checked);
				break;
		}
		
		return (
			<div className="block-notes-content">
				{tasksFiltered.map(item => 
					<OneTask 
						key={item.id} 
						task={item}
						actions={this.props.actions} 
						tasks={this.props.tasks} 
					/>
				)}
			</div>
		);
	}
}