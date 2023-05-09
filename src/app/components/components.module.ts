import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
import { WeatherModalComponent } from './weather-modal/weather-modal.component';



@NgModule({
  declarations: [
    LocationModalComponent,
    WeatherModalComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LocationModalComponent,
    WeatherModalComponent,
    CardComponent
  ]

})
export class ComponentsModule { }
