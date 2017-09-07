import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subtitle = '(v1)';
}
// $(document).ready(function(){
// 	alert($("p").length);
// 	$("div").each(function(){
// 		alert($(this).html());
// 	});
// });