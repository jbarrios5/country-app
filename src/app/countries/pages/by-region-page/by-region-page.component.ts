import { Component } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  
  public countries:Country[]=[]
  
  constructor(private service:CountriesService){}

  public searchByRegion(term:string){
    this.service.searchByRegion(term)
    .subscribe(
      res => this.countries = res
    )
  }

}
