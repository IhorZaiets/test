import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  fetchedCurrensies = []

  todayString : string = new Date().toLocaleDateString();

  ngOnInit(): void {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(res => res.json())
    .then(res => {
      this.fetchedCurrensies = res.filter((currency: { cc: string; rate: number; }) => currency.cc === 'USD' || currency.cc === 'EUR')
    })
    .then(() => console.log(this.fetchedCurrensies))
    
  }
}
