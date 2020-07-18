import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  continentsData: any[] = [
    { name: 'North America', value: 579024000 },
    { name: 'South America', value: 422535000 },
    { name: 'Europe', value: 738849000 },
    { name: 'Africa', value: 1216130000 },
    { name: 'Asia', value: 4581757408 },
    { name: 'Oceania', value: 38304000 },
    { name: 'Antarctica', value: 1106 }
  ];

  constructor() { }

  public getContinentsData(): any[] {
    return this.continentsData.sort((a, b) => { return (a.name >= b.name) ? 1 : -1; });
  }

}
