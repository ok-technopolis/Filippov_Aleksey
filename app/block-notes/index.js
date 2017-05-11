'use strict';

import React from "react";

import './style.scss';

import BlockNotesHeader from '../block-notes-header';
import BlockNotesContent from '../block-notes-content';

export default class BlockNotes extends React.Component{
	constructor(props){
		super(props);
		
		this.addNote = this.addNote.bind(this);
	}
	
	addNote(text){
		if (text.trim().length == 0) return;
		
		this.refs.blockNotesContent.addNote(text);
	}
	
	render(){
		return (
			<div className="block-notes">
				<div className="block-notes__inner">
					<div className="block-notes__header">
						<BlockNotesHeader text="Whats needs to be done?" addNote={this.addNote}/>
					</div>
					<div className="block-notes__content">
						<BlockNotesContent ref="blockNotesContent"/>
					</div>
				</div>
			</div>
		);
	}
}