'use strict';

import React from "react";

import './style.scss';

import OneTask from '../one-task';

export default class BlockNotesContent extends React.Component{
	render(){
		let tasksFiltered;
		switch (this.props.type) {
			case 'all':
				tasksFiltered = this.props.tasks;
				break;
			case 'active':
				tasksFiltered = this.props.tasks.filter(item => !item.checked);
				break;
			case 'completed':
				tasksFiltered = this.props.tasks.filter(item => item.checked);
				break;
		}
		
		return (
			<div className="block-notes-content">
				{tasksFiltered.map(item => 
					<OneTask 
						key={item.id} 
						id={item.id} 
						text={item.text}
						checked={item.checked}
						actions={this.props.actions} 
						tasks={this.props.tasks} 
					/>
				)}
			</div>
		);
	}
}