import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
// Component decorator, imported from @angular/core libra
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

  constructor() { }

  ngOnInit(): void {
  }

}
