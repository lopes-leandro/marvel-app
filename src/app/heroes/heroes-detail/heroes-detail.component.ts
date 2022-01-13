import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { Hero, IHero } from 'src/app/shared/models/hero';
import { MarvelService } from 'src/app/shared/services/marvel.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit, OnDestroy {

  hero = new Hero();
  isStreamActive: boolean;

  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute
  ) { 
    this.isStreamActive = false;
  }
  ngOnDestroy(): void {
    this.isStreamActive = false;
  }

  ngOnInit(): void {
    this.isStreamActive = true;
    console.log();
    
    this.route.paramMap.pipe(
      takeWhile(() => !!this.isStreamActive),
      map(params => {
        const characteresId = params.get('charactereId') ?? '';       
        return this.marvelService.getCharacteresById(characteresId)
          .pipe(
            takeWhile(() => !!this.isStreamActive),
            map((hero: IHero) => {
              this.hero = hero
            })
          ).subscribe()
      })
    ).subscribe();
  }

}
