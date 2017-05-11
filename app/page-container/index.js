'use strict';

import React from "react";

import './style.scss';

import BlockNotes from '../block-notes';
import Header from '../header';

export default class PageContainer extends React.Component{
	render(){
		return (
			<div className="page-container">
				<div className="page-container__middle-block">
					<Header />
					<BlockNotes />
				</div>
			</div>
		);
	}
}