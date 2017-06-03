'use strict';

import React from "react";

import Button from "../../base/button";

import './style.scss';

export default class ButtonsFilter extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			buttons: [{
				type: 'all',
				text: 'All',
				active: true,
				label: 'Show all tasks',
				action: this.props.filter.showAll
			}, {
				type: 'active',
				text: 'Active',
				active: false,
				label: 'Show active tasks',
				action: this.props.filter.showActive
			}, {
				type: 'completed',
				text: 'Completed',
				active: false,
				label: 'Show completed tasks',
				action: this.props.filter.showCompleted
			}]
		}
		
		this.onClick = this.onClick.bind(this);
	}
	
	onClick(type){
		for (let i = 0; i < this.state.buttons.length; i++){
			if (this.state.buttons[i].type == type){
				var action = this.state.buttons[i].action;
				return (event) => {
					this.state.buttons.forEach(el => {
						el.active = (el.type == type);
					});
					action();
				}
			}
		}
	}
	
	render(){
		return (
			<div className="buttons-filter">
				{this.state.buttons.map(el => {
					return (
						<Button 
							className={'buttons-filter__button' + ((el.active) ? ' button_active' : '')}
							onClick={this.onClick(el.type)}
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