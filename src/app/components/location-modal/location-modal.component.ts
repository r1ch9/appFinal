import { Component, OnInit } from '@angular/core';

// Service
import { LocationService } from 'src/app/services/location.service';

// Interfaces
import { City, LocObj, Locations } from 'src/app/interfaces/locations.interface';
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
      .getAllLocations()
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

  verifyIfSelected(city: City): LocObj {
    const exists: LocObj = {text: 'Add city', color: 'primary'};
    const Nexists: LocObj = {text: 'Remove city', color: 'danger'};
    if (!this.locationService.selectedCity(city)) {
      return exists
    }
    return Nexists
  }
}
