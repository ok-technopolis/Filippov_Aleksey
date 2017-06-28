'use strict';

import React from "react";

import Button from "../../base/button";

import './style.scss';

export default class ButtonsFilter extends React.Component{
	constructor(props){
		super(props);
		
		let initialButtonState = {};
		props.buttons.forEach(el => {
			initialButtonState[el.type] = el.type == props.active
		});
		this.state = {
			buttons: initialButtonState
		};
				
		this.onClick = this.onClick.bind(this);
	}
	
	onClick(i){
		let type = this.props.buttons[i].type;
		let buttonState = {};
		for (let typeButton in this.state.buttons){
			buttonState[typeButton] = typeButton == type;
		}
		this.setState({
			buttons: buttonState
		}, () => {
			this.props.buttons[i].action();
		});
	}
	
	render(){
		return (
			<div className="buttons-filter">
				{this.props.buttons.map((el, i) => {
					return (
						<Button 
							className={'buttons-filter__button' + (this.state.buttons[el.type] ? ' button_active' : '')}
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