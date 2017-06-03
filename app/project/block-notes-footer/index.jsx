'use strict';

import React from "react";

import './style.scss';

import ButtonsFilter from '../buttons-filter';
import Button from '../../base/button';

export default class BlockNotesFooter extends React.Component{
	render(){
		let textCount = this.props.count + ((this.props.count > 1) ? ' items' : ' item') + ' left';
		
		return (
			<div className="block-notes-footer">
				<div className="block-notes-footer__left">{textCount}</div>
				<div className="block-notes-footer__group">
					<ButtonsFilter filter={this.props.filter}/>
				</div>
				<Button className="block-notes-footer__clear" label="Clear completed" text="Clear completed" onClick={this.props.actions.clearCompleted}/>
			</div>
		);
	}
}