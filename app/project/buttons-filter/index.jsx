'use strict';

import React from "react";

import Button from "../../base/button";

import './style.scss';

export default class ButtonsFilter extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			active: props.initialActive
		};
		
		this.onClick = this.onClick.bind(this);
	}
	
	onClick(i){
		let type = this.props.buttons[i].type;
		this.setState({
			active: type
		}, () => {
			this.props.onFilterChange(type);
		});
	}
	
	render(){
		return (
			<div className="buttons-filter">
				{this.props.buttons.map((el, i) => {
					return (
						<Button 
							className={'buttons-filter__button' + (this.state.active == el.type ? ' button_active' : '')}
							onClick={this.onClick.bind(this, i)}
							key={el.type}
							label={el.label}
							text={el.text} 
						/>
					);
				})}
			</div>
		);
	}
}