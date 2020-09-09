import {countries} from './countries.js';
const $ = require('./node_modules/jquery/dist/jquery')


countries.forEach(c => {
	$('#container').append(`<div>${c}</div>`)
})


console.log('main.js')
