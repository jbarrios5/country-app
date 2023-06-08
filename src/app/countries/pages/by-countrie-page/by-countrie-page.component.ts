import { Component } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styleUrls: ['./by-countrie-page.component.css']
})
export class ByCountriePageComponent {
  public countries:Country[] = [];  

  constructor(private countriesService:CountriesService){}

  searchByCountry(term:string):void{
    console.log(term);
    
    this.countriesService.searchCountry(term)
    .subscribe(countries => this.countries = countries);

    console.log(this.countries);
    
    
        
  }
}
