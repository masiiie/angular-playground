import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  daysMonth = 30;

  ngOnInit(): void {
  }

  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }

}