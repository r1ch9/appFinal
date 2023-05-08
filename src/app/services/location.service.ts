import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { City, Locations } from '../interfaces/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }
  private selectedCities: City[] = [];

  getListOfLocations() {
    return this.http.get<Locations>(`/assets/data/data.json`);
  }

  addNewCity(city: City) {
    const existe = this.selectedCities.filter(item => item.name === city.name)
    if (existe.length === 0) {
      this.selectedCities = [...this.selectedCities, city];
    }
  }

  removeCity(city: City) {
    const result = this.selectedCities.filter(cities => cities.name !== city.name);
    this.selectedCities = result;
  }

  getSelectedCities() {
    return [...this.selectedCities]
  }

  selectedCity(city: City): boolean {
    const existe = this.selectedCities.filter(item => item.name === city.name)
    if (existe.length === 1) {
      return true;
    }
    return false;
  }

}
