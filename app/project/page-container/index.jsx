'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions.js';

import './style.scss';

import BlockNotes from '../block-notes';
import Header from '../header';

class PageContainer extends React.Component{
	render(){
		return (
			<div className="page-container">
				<div className="page-container__middle-block">
					<Header />
					<BlockNotes actions={this.props.actions} tasks={this.props.tasks} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	tasks: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageContainer);