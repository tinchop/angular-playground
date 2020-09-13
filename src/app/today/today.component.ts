import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../service/palette.service';
import { PopulationService } from '../service/population.service';
import { NgxChartsColorScheme } from '../shared/model/ngx-charts-color-scheme';

@Component({
  selector: 'ngp-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(private populationService: PopulationService, private paletteService: PaletteService) { }

  currentPopulation: any[] = [];
  pieGridScheme: NgxChartsColorScheme;
  barVerticalScheme: NgxChartsColorScheme;
  barChartData: any[] = [];

  barChartSize: any[] = [700, 400];

  ngOnInit(): void {
    this.pieGridScheme = this.paletteService.getBlueScheme(6);
    this.barVerticalScheme = this.paletteService.getFullBlueScheme();
    this.populationService.getAllData().subscribe(data => {
      this.currentPopulation = this.populationService.getTodaysTotalsGroupedByContinent(data);
      this.barChartData = this.populationService.getTodaysPodium(data, 18);
    }
    );
  }

}
