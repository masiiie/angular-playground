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

  range(i: number) {
    return new Array(i);
  }

  // Mal: febrero lo esta dando con 31 dias
  public daysInMonth() : number {
    return new Date(this.year, this.month, 0).getDate();
  }

  public numberOfWeeks() : number{
    let inMonth = this.daysInMonth();
    return inMonth%7>0 ? Math.floor(inMonth/7) + 1 : Math.floor(inMonth/7); 
  }

  public prevMonth() {
    this.month = this.month - 1 == 0 ? 12 : this.month-1;
    this.year = this.month == 12 ? this.year - 1 : this.year; 
    this.yearMonth = new Date(this.year,this.month);
  }

  public nextMonth() {
    this.month = this.month + 1 == 13 ? 1 : this.month+1;
    this.year = this.month == 1 ? this.year + 1 : this.year; 
    this.yearMonth = new Date(this.year,this.month);
  }
}

