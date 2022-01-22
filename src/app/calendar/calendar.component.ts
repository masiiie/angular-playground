import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public year:number;
  current : Date;
  month:number;
  normalView: boolean;

  constructor() { 
    this.current = new Date();
    this.year = this.current.getFullYear();
    this.month = this.current.getMonth();
    this.normalView = true;
  }

  ngOnInit(): void {
  }

  range(i: number, start = 0) {
    return [...Array(i).keys()].map(i => i + start);
  }

  public selectYear(yearS:number){
    this.year = yearS;
    this.normalView = true;
  }

  public changeYear(){
    this.normalView = this.normalView ? false : true;
  }

  // Mal: febrero lo esta dando con 31 dias
  public daysInMonth() : number {
    return new Date(this.year, this.month, 0).getDate();
  }

  public prevMonth() {
    if(this.normalView){
      this.month = this.month - 1 == 0 ? 12 : this.month-1;
      this.year = this.month == 12 ? this.year - 1 : this.year; 
    }
    else this.year -= 16;
  }

  public nextMonth() {
    if(this.normalView){
      this.month = this.month + 1 == 13 ? 1 : this.month+1;
      this.year = this.month == 1 ? this.year + 1 : this.year; 
    }
    else this.year += 16;
  }

  public yearMonth() : Date{
    return new Date(this.year,this.month);
  }
}

