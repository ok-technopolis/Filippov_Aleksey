'use strict';

import React from "react";

import './style.scss';

import GroupOfButtons from '../group-of-buttons';

export default class BlockNotesFooter extends React.Component{
	render(){
		return (
			<div className="block-notes-footer">
				<div className="block-notes-footer__left" id="notes-counter">3 items left</div>
				<div className="block-notes-footer__right">Clear completed</div>
				<div className="block-notes-footer__group">
					<GroupOfButtons />
				</div>
			</div>
		);
	}
}