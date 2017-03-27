'use strict';

import './note_line.scss';

import template from './note_line.pug';

export default class NoteLine {
	constructor(text){
		this.elem = template({text: text});
	}
}