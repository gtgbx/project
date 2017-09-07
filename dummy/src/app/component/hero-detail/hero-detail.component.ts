import { Component, Input } from '@angular/core';
 
import { Hero } from '../../vo/hero';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer','power'];
}