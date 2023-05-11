import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { NewsService } from '../../services/news.service';
import { Doc, NewsCity } from '../../interfaces/locations.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public selectedTab: string = 'all';
  public newsList: NewsCity[] = []

  constructor(
    private locationService: LocationService,
    private newsService: NewsService,
  ) {}

  ngOnInit(): void {
  
  }

  get listOfCities() {
    this.newsService.getListOfSelectedCities(this.locationService.getSelectedCities)
    return this.locationService.getSelectedCities
  }

  get newsForCity() {
    this.newsList = this.newsService.getNewsForCity
    this.returnNewsByCity()
    return this.newsService.getNewsForCity
  }

  isValid(city: string) {
    if(this.selectedTab === 'all' || this.selectedTab === city) {
      return true
    } 

    return false
  }

  returnNewsByCity(): Doc[] {
    const arrToReturn = [];
    for (const index in this.newsList) {
      if(this.newsList[index].city.name === this.selectedTab || this.selectedTab === 'all') {
        arrToReturn.push(...this.newsList[index].data.docs);
      }
    }

    return arrToReturn
  }

  openNews(doc: Doc) {
    window.open(doc.web_url, '_blank');
  }

  getDocPic(doc: Doc) {
    if(doc.multimedia[0] && doc.multimedia[0].url) {
      return `https://www.nytimes.com/${doc.multimedia[0].url}`
    }

    return '/assets/TNYT.jpg'
  }
}
