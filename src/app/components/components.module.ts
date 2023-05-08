import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LocationModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LocationModalComponent
  ]

})
export class ComponentsModule { }
