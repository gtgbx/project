import { Component, OnInit, Input} from '@angular/core';
import {Hero} from '../../vo/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	//this.selectedHero = this.heroes[0];
  }

  @Input() hero: Hero;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer','power'];

  heroes = [
    new Hero(1, 'Windstorm', 'power', 'EGO1'),
    new Hero(13, 'Bombasto', 'power', 'EGO2'),
    new Hero(15, 'Magneta', 'power', 'EGO3'),
    new Hero(20, 'Tornado', 'power', 'EGO4')
  ];


  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.selectedHero); }
}
