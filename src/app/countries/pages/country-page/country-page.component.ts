import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interface/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{
  public country?: Country;
  constructor( 
    private activeRoute:ActivatedRoute ,
    private router: Router ,
    private service:CountriesService ){}
  
    ngOnInit(): void {
      this.activeRoute.params
      .pipe(
        switchMap( ({ id }) => this.service.searchCountryByAlphaCode( id )),
      )
      .subscribe( country => {
        if ( !country ) return this.router.navigateByUrl('');
        return this.country = country;
      });
    }
}
