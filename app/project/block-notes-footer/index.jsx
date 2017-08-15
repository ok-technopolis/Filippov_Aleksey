'use strict';

import React from "react";

import './style.scss';

import ButtonsFilter from '../buttons-filter';
import Button from '../../base/button';
import FilterAction from '../filterAction.js';

export default class BlockNotesFooter extends React.Component{
	constructor(props){
		super(props);
		
		this._filter = [
			{
				type: FilterAction.SHOW_ALL,
				text: 'All',
				label: 'Show all tasks'
			}, {
				type: FilterAction.SHOW_ACTIVE,
				text: 'Active',
				label: 'Show active tasks'
			}, {
				type: FilterAction.SHOW_COMPLETED,
				text: 'Completed',
				label: 'Show completed tasks'
			}
		];
	}
	
	render(){
		let textCount = this.props.count + ((this.props.count > 1) ? ' items' : ' item') + ' left';
		
		return (
			<div className="block-notes-footer">
				<div className="block-notes-footer__left">{textCount}</div>
				<div className="block-notes-footer__group">
					<ButtonsFilter initialActive={FilterAction.SHOW_ALL} buttons={this._filter} onFilterChange={this.props.filter}/>
				</div>
				<Button className="block-notes-footer__clear" label="Clear completed" text="Clear completed" onClick={this.props.actions.clearCompleted}/>
			</div>
		);
	}
}