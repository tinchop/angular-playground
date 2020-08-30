import { Injectable } from '@angular/core';
import { NgxChartsColorScheme } from '../shared/model/ngx-charts-color-scheme';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  constructor() { }

  private blueScheme: string[] = ['#000E14', '#001D29', '#002B3D', '#003952', '#004766', '#00567A', '#00648F', '#0072A3', '#0081B8', '#008FCC', '#009DE0', '#00ABF5', '#0AB6FF', '#1FBCFF', '#33C2FF', '#47C8FF', '#5CCEFF', '#70D4FF'];

  getFullBlueScheme(): NgxChartsColorScheme {
    return {
      domain: this.blueScheme
    };
  }

  getBlueScheme(quantity: number): NgxChartsColorScheme {
    if (quantity > this.blueScheme.length) {
      throw new Error('Quantity argument must be less or equal to the quantity of colors in the palette.')
    }
    let colors = [];
    const leap = Math.ceil(this.blueScheme.length / quantity);
    let index = 0;
    while (index < this.blueScheme.length) {
      colors.push(this.blueScheme[index]);
      index += leap;
    }

    return { domain: colors };
  }

}
