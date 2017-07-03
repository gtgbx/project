import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
$(document).ready(function(){
	alert($("p").length);
	$("div").each(function(){
		alert($(this).html());
	});
});