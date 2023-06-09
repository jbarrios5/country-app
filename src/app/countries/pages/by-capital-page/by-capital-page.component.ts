import { Component } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService:CountriesService){}

  searchByCapital(term:string):void{
    console.log(term);
    
    this.countriesService.searchCapital(term)
    .subscribe(countries => this.countries = countries);

    console.log(this.countries);
    
    
        
  }
}
