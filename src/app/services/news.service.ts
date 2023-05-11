import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { City, NewsCity, NewsResponse } from '../interfaces/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _newsApi = 'd1xvoWWyVGZrAE3d6yjAEoI0dVuxdczR';
  private _newsRequest = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  private requestedNewsForCity: City[] = [];
  private newsForCity: NewsCity[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  private getNews(city: City) {
    const params = new HttpParams()
      .set('api-key', this._newsApi)
      .set('sort', 'newest')
      .set('fq', `glocations:("${city.name}")`);

    this.http.get<NewsResponse>(`${this._newsRequest}`, { params }).subscribe(
      (cityResp) => {
        const result: NewsCity = {
            city,
            data: cityResp.response
        }
        this.newsForCity.push(result);
      }
    )
  }

  getListOfSelectedCities(cities: City[]) {
    for (const city in cities) {
      if(this.requestedNewsForCity.indexOf(cities[city]) === -1) {
        this.getNews(cities[city])
      }
    }

    this.requestedNewsForCity = [...cities]
  }

  get getNewsForCity() {
    return [...this.newsForCity]
  }
}
