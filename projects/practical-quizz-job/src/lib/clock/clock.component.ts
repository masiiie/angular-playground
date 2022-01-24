import { Component, OnInit } from '@angular/core';

import { Subscription, TimeoutError, timer } from 'rxjs';
import { map, share } from "rxjs/operators";
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'lib-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  time = new Date();
  intervalId;

  constructor() {
    // Ejecuta el metodo en el intervalo dado
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}