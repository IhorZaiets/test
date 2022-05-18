import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {

  constructor() { }

  @Input() currency: any;

  ngOnInit(): void {
  }

}
