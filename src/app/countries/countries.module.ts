import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountrisRoutingModule } from './countries-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriePageComponent } from './pages/by-countrie-page/by-countrie-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


@NgModule({
    imports: [CountrisRoutingModule,SharedModule,CommonModule],
    exports: [CountrisRoutingModule],
    declarations: [ByCapitalPageComponent,ByRegionPageComponent,ByCountriePageComponent,CountryPageComponent,CountryTableComponent],
    providers: [],
})
export class CountriesModule { }
 