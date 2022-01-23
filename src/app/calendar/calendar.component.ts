import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  current : Date;
  normalView: boolean;

  constructor() { 
    this.current = new Date();
    this.normalView = true;
  }

  ngOnInit(): void {
  }

  range(i: number, start = 0) {
    return [...Array(i).keys()].map(i => i + start);
  }

  public selectYear(year:number){
    this.normalView = true;
    this.current = new Date(year, this.current.getMonth(), this.current.getDate());
  }

  public changeYear(){
    this.normalView = this.normalView ? false : true;
  }

  // No funciona
  public selectDay(day:number){
    // ponerle la clase de selected a esta nueva fecha y quitarsela a la antigua
    
    this.current = new Date(this.current.getFullYear(), this.current.getMonth(), day);
  }

  // Mal: febrero lo esta dando con 31 dias
  public daysInMonth() : number {
    return new Date(this.current.getFullYear(), this.current.getMonth()+1, 0).getDate();
  }

  public prevMonth() {
    let year = this.current.getFullYear();
    let month = this.current.getMonth();
    let day = this.current.getDate();
    if(this.normalView){
      month = month - 1 == 0 ? 12 : month-1;
      year = month == 12 ? year - 1 : year; 
    }
    else year-=16;

    this.current = new Date(year, month, day);
  }

  public nextMonth() {
    let year = this.current.getFullYear();
    let month = this.current.getMonth();
    let day = this.current.getDate();

    if(this.normalView){
      month = month + 1 == 13 ? 1 : month+1;
      year = month == 1 ? year + 1 : year; 
    }
    else year += 16;

    this.current = new Date(year, month, day);
  }

  public dayOfFirstDate(){
    return new Date(this.current.getFullYear(), this.current.getMonth(), 1).getDay();
  }
  //       <td *ngIf="i==0" *ngFor="let in of range(dayOfFirstDate())"></td>
}