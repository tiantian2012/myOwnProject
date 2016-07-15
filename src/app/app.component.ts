import {Component, Input, OnInit} from '@angular/core';
import '../../public/css/styles.css';
import {HeroDetailComponent} from './hero-detail.component'
import {Hero} from './hero'
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]

})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes!';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {

  }
  ngOnInit() {
    this.getHeroes();
  }


  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }


  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


}


