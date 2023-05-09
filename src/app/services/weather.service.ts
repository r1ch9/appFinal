import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// interfaces
import { City, CityWeather, weatherCity } from '../interfaces/locations.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _appId: string = '106df6a337f9bbed1366c7b066126b0b';
  private _weatherService = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeather(city: City) {
    const params = new HttpParams()
      .set('lat', city.lat)
      .set('lon', city.lon)
      .set('appid', this._appId);

    return this.http.get<CityWeather>(`${this._weatherService}/weather`, { params })
  }


}
