import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero, IHero, IHeroDto } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  URL_API = {
    character: `/v1/public/characters`
  }

  params = new HttpParams();

  constructor(private http: HttpClient) { }

  getCharacteres(): Observable<IHero[]> {
    return this.http.get<{ data: { results: IHeroDto[] } }>(
      `http://gateway.marvel.com${this.URL_API.character}`,
      {
        params: this.params
          .set('limit', '50')
          .set('ts', 'foursys')
          .set('apikey', '5a237863b3cc2061003cbbc4fe20dc06')
          .set('hash', '98bb0076bf597f9300b38f8c71bda04b')
      })
      .pipe(
        map((res) => this.transformationMarvelData(res.data.results))
      );
  }


  getCharacteresById(charactereId: string): Observable<IHero> {
    return this.http.get<{ data: { results: IHeroDto[] } }>(
      `http://gateway.marvel.com${this.URL_API.character}/${charactereId}`,
      {
        params: this.params
          .set('ts', 'foursys')
          .set('apikey', '5a237863b3cc2061003cbbc4fe20dc06')
          .set('hash', '98bb0076bf597f9300b38f8c71bda04b')
      })
      .pipe(
        map((res) => this.transformationMarvelSimpleData(res.data.results))
      );
  }

  transformationMarvelSimpleData(res: IHeroDto[]): IHero {
    let hero = new Hero();

    res.forEach(item => {

      hero = {
        id: item.id,
        title: item.name,
        description: item.description,
        urlImagem: `${item.thumbnail.path}.${item.thumbnail.extension}`
      }
    });

    return hero
  }

  transformationMarvelData(res: IHeroDto[]): IHero[] {
    let cards: IHero[] = [];

    res.forEach(item => cards.push(
      {
        id: item.id,
        title: item.name,
        description: item.description,
        urlImagem: `${item.thumbnail.path}.${item.thumbnail.extension}`
      }
    ));

    return cards
  }
}
