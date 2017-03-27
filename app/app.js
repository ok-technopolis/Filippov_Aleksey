import React from "react";
import ReactDOM from "react-dom";

import Layout from "./layout";
import NoteLine from "./note_line";


document.addEventListener('DOMContentLoaded', function () {
	
	ReactDOM.render(<Layout />, document.getElementById('container'));

});