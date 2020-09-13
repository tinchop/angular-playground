import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../service/population.service';

@Component({
  selector: 'ngp-yesterday',
  templateUrl: './yesterday.component.html',
})
export class YesterdayComponent implements OnInit {

  yesterdaysPopulation: number;
  todaysPopulation: number;

  constructor(private populationService: PopulationService) { }

  ngOnInit(): void {
    this.populationService.getAllData().subscribe(data => {
      this.yesterdaysPopulation = this.populationService.getYesterdaysPopulation(data);
      this.todaysPopulation = this.populationService.getTodaysPopulation(data);
    }
    );
  }

}
