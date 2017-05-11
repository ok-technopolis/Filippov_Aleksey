'use strict';

import React from "react";

// import './one_task.scss';

export default class InputCheckbox extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			checked: false
		};
		
		this.toggleChange = this.toggleChange.bind(this);
	}
	
	toggleChange(event){
		this.setState({
			checked: !this.state.checked
		}, () => {
			if (typeof this.props.onChangeCheck == 'function') this.props.onChangeCheck(this.state.checked);
		});
	}
	
	render(){
		return (
			<div className="input_radio">
				<input type="checkbox" checked={this.state.checked} onChange={this.toggleChange}/>
				
			</div>);
	}
}