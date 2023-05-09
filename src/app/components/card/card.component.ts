import { Component, Input, OnInit } from '@angular/core';
import { City, weatherCity } from 'src/app/interfaces/locations.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  public cityWWeather!: weatherCity;
  @Input() city!: City;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    setTimeout(() => { 

      let temperature;
      let currentWeather;
  
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
          currentWeather: this.weatherIcon(currentWeather),
        };
      });
    }, 2000);
  }

  weatherIcon(currentWeather: string) {
    switch (currentWeather) {
      case 'Clear':
        return 'sunny-outline'
        break;
    
      case 'Rain' || 'Drizzle':
        return 'rainy-outline'
        break;

      case 'Thunderstorm':
        return 'thunderstorm-outline'
        break;
      
      case 'Clouds':
        return 'cloudy-outline'
        break;
      
      case 'Haze':
        return 'cloud-download-outline'
        break;

      default:
        return 'sunny-outline'
        break;
    }
  }
}
