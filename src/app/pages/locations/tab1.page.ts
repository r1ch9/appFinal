import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Modal
import { LocationModalComponent } from 'src/app/components/location-modal/location-modal.component';

// Interfaces
import { City } from 'src/app/interfaces/locations.interface';

// Services
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public selectedCities: City[] = [];

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: LocationModalComponent,
    });

    modal.present();
  }

  constructor(
    private modalCtrl: ModalController,
    private locationService: LocationService
  ) {}
}
