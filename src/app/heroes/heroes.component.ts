import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
// Component decorator, imported from @angular/core libra
// Provides metadata on our component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// Always export class component so it can be used elsewhere...
// like in the AppModule.
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

}
