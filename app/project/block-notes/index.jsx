'use strict';

import React from "react";

import './style.scss';

import BlockNotesHeader from '../block-notes-header';
import BlockNotesContent from '../block-notes-content';
import BlockNotesFooter from '../block-notes-footer';
import FilterAction from '../filterAction.js';

export default class BlockNotes extends React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			show: FilterAction.SHOW_ALL
		}
		
		this.getLeft = this.getLeft.bind(this);
		this.filter = this.filter.bind(this);
	}
	
	filter(type){
		this.setState({show: type});
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