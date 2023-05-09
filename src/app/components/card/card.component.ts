import { Component, Input, OnInit } from '@angular/core';
import { City, IconImg, weatherCity } from 'src/app/interfaces/locations.interface';
import { WeatherService } from 'src/app/services/weather.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  public cityWWeather!: weatherCity;
  @Input() city!: City;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
    ) { }

  ngOnInit() {
    setTimeout(() => { 

      let temperature;
      let currentWeather ;
  
      this.weatherService.getWeather(this.city)
      .subscribe((resp: any) => {
        temperature = resp.main.temp;
        if (resp.weather[0].main === 'Drizzle') {
          currentWeather = 'Rain';
        } else if (
          resp.weather[0].main === 'Mist' ||
          resp.weather[0].main === 'Fog' ||
          resp.weather[0].main === 'Smoke'
        ) {
          currentWeather = 'Haze';
        } else {
          currentWeather = resp.weather[0].main;
        }
    
        this.cityWWeather = {
          name: this.city.name,
          lat: this.city.lat,
          lon: this.city.lon,
          country: this.city.country,
          state: this.city.state,
          temperature,
          currentWeatherII: this.weatherIcon(currentWeather),
        };
      });
    }, 2000);
  }

  weatherIcon(currentWeather: string): IconImg {
    switch (currentWeather) {
      case 'Clear':
        return {icon: 'sunny-outline', image: '/assets/sun.jpg'}
        break;
    
      case 'Rain' || 'Drizzle':
        return {icon: 'rainy-outline', image: '/assets/rain.jpg'}
        break;

      case 'Thunderstorm':
        return {icon: 'thunderstorm-outline', image: '/assets/thunder.jpg'}
        break;
      
      case 'Clouds':
        return {icon: 'cloudy-outline', image: '/assets/cloud.jpg'}
        break;
      
      case 'Haze':
        return {icon: 'cloud-download-outline', image: '/assets/haze.jpg'}
        break;

      default:
        return {icon: 'sunny-outline', image: '/assets/sun.jpg'}
        break;
    }
  }

  removeLocation(){
    this.locationService.removeCity(this.city)
  }
}
