import { Injectable } from '@angular/core';
import { Hero } from '../vo/hero';
import { HEROES } from '../constant/mock-heroes';
import { PowerList } from '../constant/mock-hero-power';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  getPowerList(): String[] {
    return PowerList;
  }
  
}