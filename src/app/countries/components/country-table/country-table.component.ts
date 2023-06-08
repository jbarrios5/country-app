import { Component, Input } from '@angular/core';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width:35px
    }`
  ]
})
export class CountryTableComponent {

    @Input()
    public countries:Country[] = [];
}
