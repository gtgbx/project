import { Component, OnInit, Input} from '@angular/core';
import {Hero} from '../../vo/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  providers: [HeroService]
})
export class HeroFormComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	//this.selectedHero = this.heroes[0];
    this.powers = this.heroService.getPowerList();
    this.getHeroes();
  }

  @Input() hero: Hero;

  selectedHero: Hero;
  powers: String[];
  heroes: Hero[];


  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.selectedHero); }
}
