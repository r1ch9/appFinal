import { Component, OnInit } from '@angular/core';

// Service
import { LocationService } from 'src/app/services/location.service';

// Interfaces
import { City, Locations } from 'src/app/interfaces/locations.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
  public locationsList: City[] = [];

  constructor(
    private locationService: LocationService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.locationService
      .getListOfLocations()
      .subscribe((locations: Locations) => {
        this.locationsList = locations.cityData;
      });

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  selectCity(city: City) {
    if (!this.locationService.selectedCity(city)) {
      this.locationService.addNewCity(city);
    } else {
      this.locationService.removeCity(city);
    }
  }

  verifyIfSelected(city: City) {
    if (!this.locationService.selectedCity(city)) {
      return 'Add city';
    }
    return 'Remove city';
  }
}
