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

  private sortByPopulation = (a: any, b: any) => { return (a.population <= b.population) ? 1 : -1; }

  public getTodaysTotalsGroupedByContinent(data: any): any {
    let result = [];
    data.today.continents.forEach(continent => {

      let continentPopulation = 0;
      continent.countries.forEach(country => {
        continentPopulation += country.population;
      });

      let resultItem = { name: continent.name, value: continentPopulation };
      result.push(resultItem);
    });

    return result.sort(this.sortNameValue);
  }

  public getTodaysPodium(data: any, podiumSize: number) {
    const countries = this.getTodaysCountries(data).sort(this.sortByPopulation);
    let result = [];
    for (let country of countries) {
      if (result.length >= podiumSize) break;
      result.push({ name: country.name, value: country.population });
    }
    return result;
  }

  public getTodaysPodiumByContinent(data: any, continentName: string, podiumSize: number): any[] {
    const countries = this.getTodaysCountriesByContinent(data, continentName).sort(this.sortByPopulation);
    let result = [];
    for (let country of countries) {
      if (result.length >= podiumSize) break;
      result.push({ name: country.name, value: country.population });
    }
    return result;
  }

  public getTodaysCountries(data: any): any[] {
    let countries = [];
    data.today.continents.forEach(continent => countries = countries.concat(continent.countries));
    return countries;
  }

  public getTodaysCountriesByContinent(data: any, continentName: string): any[] {
    for (let continent of data.today.continents) {
      if (continentName.valueOf() === continent.name.valueOf()) return continent.countries;
    }
    throw Error('Continent not found:' + continentName);
  }

  public getYesterdaysPopulation(data: any): number {
    return data.yesterday.population;
  }

  public getTodaysPopulation(data: any): number {
    return data.today.population;
  }

  public getTomorrowsPopulation(data: any): number {
    return data.tomorrow.population;
  }

}
