import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroSelectorInterface, HeroesIds} from './hero.selectors';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectors: HeroSelectorInterface = HeroesIds;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
