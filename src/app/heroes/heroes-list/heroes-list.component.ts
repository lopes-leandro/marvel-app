import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from 'src/app/shared/models/hero';
import { MarvelService } from 'src/app/shared/services/marvel.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes$ = new Observable<IHero[]>();

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.heroes$ = this.marvelService.getCharacteres();
  }

  public trackByFn(index: number, hero: IHero) {
    return hero.id
  }

}
