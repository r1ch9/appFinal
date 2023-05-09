import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// interfaces
import {
  City,
  CityWeather,
  IconImg,
  weatherCity,
} from '../interfaces/locations.interface';

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

    return this.http.get<CityWeather>(`${this._weatherService}/weather`, {
      params,
    });
  }

  weatherIcon(currentWeather: string): IconImg {
    if (currentWeather === 'Drizzle') {
      currentWeather = 'Rain';
    } else if (
      currentWeather === 'Mist' ||
      currentWeather === 'Fog' ||
      currentWeather === 'Smoke'
    ) {
      currentWeather = 'Haze';
    }

    switch (currentWeather) {
      case 'Clear':
        return { icon: 'sunny-outline', image: '/assets/sun.jpg' };
        break;

      case 'Rain' || 'Drizzle':
        return { icon: 'rainy-outline', image: '/assets/rain.jpg' };
        break;

      case 'Thunderstorm':
        return { icon: 'thunderstorm-outline', image: '/assets/thunder.jpg' };
        break;

      case 'Clouds':
        return { icon: 'cloudy-outline', image: '/assets/cloud.jpg' };
        break;

      case 'Haze':
        return { icon: 'cloud-download-outline', image: '/assets/haze.jpg' };
        break;

      default:
        return { icon: 'sunny-outline', image: '/assets/sun.jpg' };
        break;
    }
  }
}
