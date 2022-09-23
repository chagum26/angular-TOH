import { TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROES } from '../Models/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero? : Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

}
