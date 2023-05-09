import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/locations.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public selectedTab: string = 'all';

  constructor(
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    
  }

  get listOfCities() {
    return this.locationService.getSelectedCities
  }
}
