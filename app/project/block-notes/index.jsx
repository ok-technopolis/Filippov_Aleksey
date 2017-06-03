'use strict';

import React from "react";

import './style.scss';

import BlockNotesHeader from '../block-notes-header';
import BlockNotesContent from '../block-notes-content';
import BlockNotesFooter from '../block-notes-footer';

export default class BlockNotes extends React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			show: 'all'
		}
		
		this.getLeft = this.getLeft.bind(this);
		this.filter.showAll = this.filter.showAll.bind(this);
		this.filter.showActive = this.filter.showActive.bind(this);
		this.filter.showCompleted = this.filter.showCompleted.bind(this);
	}
	
	filter = {
		showAll: () => {
			this.setState({show: 'all'});
		},
		showActive: () => {
			this.setState({show: 'active'});
		},
		showCompleted: () => {
			this.setState({show: 'completed'});
		}
	}
	
	getLeft(){
		return this.props.tasks.reduce((last, item) => {
			return (!item.checked) ? (last + 1) : last;
		}, 0);
	}
	
	render(){
		let empty = this.props.tasks.length == 0;
		
		return (
			<div className={'block-notes' + (empty ? ' block-notes_empty' : '')}>
				<div className="block-notes__inner">
					<div className="block-notes__header">
						<BlockNotesHeader actions={this.props.actions}/>
					</div>
					<div className="block-notes__content">
						<BlockNotesContent type={this.state.show} tasks={this.props.tasks} actions={this.props.actions}/>
					</div>
					<div className="block-notes__footer">
						<BlockNotesFooter count={this.getLeft()} actions={this.props.actions} filter={this.filter}/>
					</div>
				</div>
			</div>
		);
	}
}