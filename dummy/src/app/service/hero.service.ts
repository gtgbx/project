import { Injectable } from '@angular/core';
import { Hero } from '../vo/hero';
import { HEROES } from '../constant/mock-heroes';
import { PowerList } from '../constant/mock-hero-power';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

	getHeroesSlowly(): Promise<Hero[]> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(HEROES), 2000);
	  });
	}

  getPowerList(): String[] {
    return PowerList;
  }
  
}