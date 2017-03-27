'use strict';

import React from "react";

// import template from './index.pug';

export default class Layout extends React.Component{
	// constructor(note){
	// 	this.elem = template({note: note});
	// }
	render(){
		// return template({note: this.props.note});
		return (
			<div className="page-container">
				<div className="page-container__middle-block">
					<div className="header">
						<h1 className="header__title">todos</h1>
					</div>
					<div className="block-notes" id="block-notes">
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
									<div className="block-notes-content__tasks" id="tasks-container"></div>
									<div className="block-notes-content__footer block-notes-footer">
										<div className="block-notes-footer__left" id="notes-counter">3 items left</div>
										<div className="block-notes-footer__right">Clear completed</div>
										<ul className="block-notes-footer__group group-of-buttons">
											<li className="group-of-buttons__button button_active">All</li>
											<li className="group-of-buttons__button">Active</li>
											<li className="group-of-buttons__button">Completed</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}