import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs'
import { Country } from '../interface/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {
    
    private apiURL:string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode(code:string):Observable<Country | null>{
        const url = `${ this.apiURL }/alpha/${ code }`;

        return this.http.get<Country[]>( url )
        .pipe(
            map( countries => countries.length > 0 ? countries[0]: null ),
            catchError( () => of(null) )
        );

    }

    searchCapital(term:string) :Observable<Country []>{
        return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`)
            .pipe(
                catchError( error => {
                    console.log(error);
                    return of([])
                })
                );
            
        
    }

    searchCountry(term:string):Observable<Country []>{
        
        return this.http.get<Country[]>(`${this.apiURL}/name/${term}`)
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
            })
            );
    }

    searchByRegion(term:string):Observable<Country []>{
        
        return this.http.get<Country[]>(`${this.apiURL}/region/${term}`)
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
            })
            );
            
            
                
    }

    
}