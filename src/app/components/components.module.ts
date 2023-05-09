import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
import { WeatherModalComponent } from './weather-modal/weather-modal.component';
import { NoLocationsComponent } from './no-locations/no-locations.component';



@NgModule({
  declarations: [
    LocationModalComponent,
    WeatherModalComponent,
    CardComponent,
    NoLocationsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LocationModalComponent,
    WeatherModalComponent,
    CardComponent,
    NoLocationsComponent
  ]

})
export class ComponentsModule { }
