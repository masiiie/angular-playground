import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  year = 2022;
  month = 1;

  public yearMonth = new Date(this.year,this.month);  

  ngOnInit(): void {
  }

  public daysInMonth() : number {
    return new Date(this.year, this.month, 0).getDate();
  }

  range(i: number) {
    return new Array(i);
  }

  public numberOfWeeks() : number{
    let inMonth = this.daysInMonth();
    return inMonth%7>0 ? Math.floor(inMonth/7) + 1 : Math.floor(inMonth/7); 
  }
}

