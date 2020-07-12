import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wpe-today',
  templateUrl: './today.component.html',
})
export class TodayComponent implements OnInit {

  constructor() { }

  currentPopulation: any[] = [];

  colorScheme = {
    domain: ['#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#dc3545', '#fd7e14', '#ffc107', '#28a745', '#20c997', '#17a2b8']
  };

  ngOnInit(): void {
    let data: any[] = [
      { name: 'North America', value: 579024000 },
      { name: 'South America', value: 422535000 },
      { name: 'Europe', value: 738849000 },
      { name: 'Africa', value: 1216130000 },
      { name: 'Asia', value: 4581757408 },
      { name: 'Oceania', value: 38304000 },
      { name: 'Antarctica', value: 1106 }
    ];

    this.currentPopulation = data.sort((a, b) => { return (a.name >= b.name) ? 1 : -1; });
  }

}
