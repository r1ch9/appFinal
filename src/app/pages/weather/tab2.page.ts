import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private locationService: LocationService) {}

  get listOfLocations() {
    return this.locationService.getSelectedCities
  }

}
