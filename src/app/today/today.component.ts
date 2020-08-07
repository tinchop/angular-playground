import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../service/population.service';

@Component({
  selector: 'ngp-today',
  templateUrl: './today.component.html',
})
export class TodayComponent implements OnInit {

  constructor(private populationService: PopulationService) { }

  currentPopulation: any[] = [];
  globalPodium: any[] = [];
  asiaPodium: any[] = [];
  africaPodium: any[] = [];
  europePodium: any[] = [];
  northAmericaPodium: any[] = [];
  southAmericaPodium: any[] = [];
  oceaniaPodium: any[] = [];

  colorScheme = {
    domain: ['#28a745', '#20c997', '#17a2b8', '#007bff', '#6610f2', '#e83e8c']
  };

  ngOnInit(): void {
    this.populationService.getAllData().subscribe(data => {
      this.currentPopulation = this.populationService.getTotalsGroupedByContinent(data);
      this.globalPodium = this.populationService.getGlobalPodium(data, 5);
      this.asiaPodium = this.populationService.getPodiumByContinent(data, 'Asia', 5);
      this.africaPodium = this.populationService.getPodiumByContinent(data, 'Africa', 5);
      this.europePodium = this.populationService.getPodiumByContinent(data, 'Europe', 5);
      this.northAmericaPodium = this.populationService.getPodiumByContinent(data, 'North America', 5);
      this.southAmericaPodium = this.populationService.getPodiumByContinent(data, 'South America', 5);
      this.oceaniaPodium = this.populationService.getPodiumByContinent(data, 'Oceania', 5);
    }
    );
  }

}
