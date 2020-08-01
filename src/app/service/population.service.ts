import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  constructor(private http: HttpClient) { }

  public getAllData(): Observable<any> {
    return this.http.get("./assets/data.json");
  }

  public getTotalsByContinent(data: any): any {
    let result = [];
    data.continents.forEach(continent => {

      let continentPopulation = 0;
      continent.countries.forEach(country => {
        continentPopulation += country.population;
      });

      let resultItem = { name: continent.name, value: continentPopulation };
      result.push(resultItem);

    });

    return result.sort((a, b) => { return (a.value <= b.value) ? 1 : -1; });
  }




}
