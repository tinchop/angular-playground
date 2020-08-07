import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  constructor(private http: HttpClient) { }

  public getAllData(): Observable<any> {
    return this.http.get("./assets/data.json");
  }

  private sortNameValue = (a: any, b: any) => { return (a.value <= b.value) ? 1 : -1; }

  private sortCountriesByPopulation = (a: any, b: any) => { return (a.population <= b.population) ? 1 : -1; }

  public getTotalsGroupedByContinent(data: any): any {
    let result = [];
    data.continents.forEach(continent => {

      let continentPopulation = 0;
      continent.countries.forEach(country => {
        continentPopulation += country.population;
      });

      let resultItem = { name: continent.name, value: continentPopulation };
      result.push(resultItem);
    });

    return result.sort(this.sortNameValue);
  }

  public getGlobalPodium(data: any, podiumSize: number) {
    const countries = this.getCountries(data).sort(this.sortCountriesByPopulation);
    let result = [];
    for (let country of countries) {
      if (result.length >= podiumSize) break;
      result.push({ name: country.name, value: country.population });
    }
    return result;
  }

  public getPodiumByContinent(data: any, continentName: string, podiumSize: number): any[] {
    const countries = this.getCountriesByContinent(data, continentName).sort(this.sortCountriesByPopulation);
    let result = [];
    for (let country of countries) {
      if (result.length >= podiumSize) break;
      result.push({ name: country.name, value: country.population });
    }
    return result;
  }

  public getCountries(data: any): any[] {
    let countries = [];
    data.continents.forEach(continent => countries = countries.concat(continent.countries));
    return countries;
  }

  public getCountriesByContinent(data: any, continentName: string): any[] {
    for (let continent of data.continents) {
      if (continentName.valueOf() === continent.name.valueOf()) return continent.countries;
    }
    throw Error('Continent not found:' + continentName);
  }

}
