import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

// Service
import { LocationService } from 'src/app/services/location.service';

// Interfaces
import { City, LocObj, Locations } from 'src/app/interfaces/locations.interface';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
  public locationsList: City[] = [];

  constructor(
    private locationService: LocationService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
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
      this.presentToast(city)
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

  async presentToast(city: City) {
    const toast = await this.toastCtrl.create({
      message: `${city.name} added successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
