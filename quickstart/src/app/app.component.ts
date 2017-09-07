import {Component} from '@angular/core';
import {Hero} from './hero';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <hero-form></hero-form>
  <h2 *ngIf="myHero">My favorite hero is: {{myHero.name}}</h2>
   <p *ngIf="heroes.length > 3">There are many heroes!</p>
  <p>Heroes:</p>
  <ul class="heroes">
    <li *ngFor="let hero of heroes; let i=index" (click)="onSelect(hero)">
  <div><span class="badge">{{hero.id}}</span> {{hero.name}}</div>
  <input [(ngModel)]="hero.name" placeholder="name">
  
      <!--<div [class.hidden]="i == 2">Show with 1111 - {{i}} class</div>-->
      <!--<div [class.hidden]="i == 3">Show with special {{i}} class</div>-->
      <!---->
      <!--<div [style.display]="i == 2 ? 'block' : 'none'">Show with style</div>-->
      <!--<div [style.display]="i == 2 ? 'none'  : 'block'">Hide with style</div>-->
    </li>
  </ul>
  <br/>
  <div *ngFor="let hero of heroes">{{hero.name}}</div>
  <h1>end</h1>
`,
})
export class AppComponent {
  title: string;
  heroes = [
    new Hero(1, 'Windstorm', 'power', 'EGO'),
    new Hero(13, 'Bombasto', 'power', 'EGO'),
    new Hero(15, 'Magneta', 'power', 'EGO'),
    new Hero(20, 'Tornado', 'power', 'EGO')
  ];
  myHero = this.heroes[0];

  constructor() {
    // this.title = 'Tour of Heroes';
    // this.myHero = 'Windstorm';
  }
}
