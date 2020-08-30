import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../service/population.service';

@Component({
  selector: 'ngp-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(private populationService: PopulationService) { }

  currentPopulation: any[] = [];

  colorScheme = {
    domain: ['#28a745', '#20c997', '#17a2b8', '#007bff', '#6610f2', '#e83e8c']
  };

  barChartData: any[] = [];

  barChartSize: any[] = [700, 400];

  ngOnInit(): void {
    this.populationService.getAllData().subscribe(data => {
      this.currentPopulation = this.populationService.getTotalsGroupedByContinent(data);
      this.barChartData = this.populationService.getPodium(data, 18);
    }
    );
  }

}
