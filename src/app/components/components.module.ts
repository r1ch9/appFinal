import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    LocationModalComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LocationModalComponent,
    CardComponent
  ]

})
export class ComponentsModule { }
