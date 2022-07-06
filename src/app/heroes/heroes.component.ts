import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
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

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
