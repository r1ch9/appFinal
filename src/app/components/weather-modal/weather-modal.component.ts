import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Interfaces
import { CityWeather, IconImg, weatherCity } from 'src/app/interfaces/locations.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-modal',
  templateUrl: './weather-modal.component.html',
  styleUrls: ['./weather-modal.component.scss'],
})
export class WeatherModalComponent  implements OnInit {
  public iconImg!: IconImg;
  @Input() weatherInfo!: CityWeather;

  constructor(
    private modalCtrl: ModalController,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.iconImg = this.weatherService.weatherIcon(this.weatherInfo.weather[0].main)
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
