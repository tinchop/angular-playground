import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngp-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss']
})
export class PodiumComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() data: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
