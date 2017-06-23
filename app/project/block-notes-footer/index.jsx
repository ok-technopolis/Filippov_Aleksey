'use strict';

import React from "react";

import './style.scss';

import ButtonsFilter from '../buttons-filter';
import Button from '../../base/button';
import FilterAction from '../filterAction.js';

export default class BlockNotesFooter extends React.Component{
	render(){
		let textCount = this.props.count + ((this.props.count > 1) ? ' items' : ' item') + ' left';
		
		let filter = this.props.filter;
		
		let filterButtons = [
			{
				type: 'all',
				text: 'All',
				label: 'Show all tasks',
				action(){
					filter(FilterAction.SHOW_ALL);
				}
			}, {
				type: 'active',
				text: 'Active',
				label: 'Show active tasks',
				action(){
					filter(FilterAction.SHOW_ACTIVE);
				}
			}, {
				type: 'completed',
				text: 'Completed',
				label: 'Show completed tasks',
				action(){
					filter(FilterAction.SHOW_COMPLETED);
				}
			}
		];
		
		return (
			<div className="block-notes-footer">
				<div className="block-notes-footer__left">{textCount}</div>
				<div className="block-notes-footer__group">
					<ButtonsFilter active="all" buttons={filterButtons}/>
				</div>
				<Button className="block-notes-footer__clear" label="Clear completed" text="Clear completed" onClick={this.props.actions.clearCompleted}/>
			</div>
		);
	}
}