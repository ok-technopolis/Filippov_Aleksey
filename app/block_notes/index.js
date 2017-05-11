'use strict';

import React from "react";

import BlockNotes from '../block_notes';
import TasksContainer from '../tasks_container';

export default class Layout extends React.Component{
	render(){
		return (
			<div className="block-notes">
				<div className="block-notes__inner">
					<div className="block-notes__header block-notes-header">
						<div className="block-notes-header__icon" id="select-all"></div>
						<div className="block-notes-header__group">
							<div className="block-notes-header__placeholder" id="add-note-placeholder">Whats needs to be done?</div>
							<input className="block-notes-header__input" id="add-note-input" type="text"/>
						</div>
					</div>
					<div className="block-notes__content">
						<div className="block-notes-content">
							<div className="block-notes-content__tasks">
								<TasksContainer />
							</div>
							<div className="block-notes-content__footer">
								<FooterNotes />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}