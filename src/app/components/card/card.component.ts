import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Interfaces
import { City, CityWeather, IconImg, weatherCity } from 'src/app/interfaces/locations.interface';

// Services
import { WeatherService } from 'src/app/services/weather.service';
import { LocationService } from '../../services/location.service';

//Components
import { WeatherModalComponent } from '../weather-modal/weather-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  public cityWWeather!: weatherCity;
  private weatherObject!: CityWeather;

  @Input() city!: City;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    setTimeout(() => { 

      let temperature;
      let currentWeather ;
  
      this.weatherService.getWeather(this.city)
      .subscribe((resp: any) => {
        this.weatherObject = resp;
        temperature = resp.main.temp;
        currentWeather = resp.weather[0].main;
    
        this.cityWWeather = {
          name: this.city.name,
          lat: this.city.lat,
          lon: this.city.lon,
          country: this.city.country,
          state: this.city.state,
          temperature,
          currentWeatherII: this.weatherService.weatherIcon(currentWeather),
        };
      });
    }, 1000);
  }

  removeLocation(){
    this.locationService.removeCity(this.city)
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: WeatherModalComponent,
      componentProps: {
        weatherInfo: this.weatherObject
      }
    });

    modal.present();
  }
}
