import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../vo/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.powers = this.heroService.getPowerList();
  }

  powers: String[];
}