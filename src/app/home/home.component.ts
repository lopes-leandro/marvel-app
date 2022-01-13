import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from '../shared/models/hero';
import { MarvelService } from '../shared/services/marvel.service';

@Component({
  selector: 'app-home',
  template: `
    <div>
      
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
  }

}
