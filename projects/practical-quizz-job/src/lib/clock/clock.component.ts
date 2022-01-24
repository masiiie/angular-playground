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

  show = 'clock';
  cronoHours = 0;
  cronoMinutes = 0;
  cronoSeconds = 0;
  cronoInterval;

  constructor() {
    // Ejecuta el metodo en el intervalo dado
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    this.cronoInterval = 0;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCrono(){
    this.cronoInterval = setInterval(()=>{
      this.cronoSeconds+=1;
      if(this.cronoSeconds == 60){
        this.cronoSeconds = 0;
        this.cronoMinutes+=1;

        if(this.cronoMinutes==60){
          this.cronoMinutes=0;
          this.cronoHours+=1;
        }
      }
    });
  }

  pauseCrono(){
    clearInterval(this.cronoInterval);
  }

  stopCrono() {
    this.pauseCrono();
    this.cronoHours = 0;
    this.cronoMinutes = 0;
    this.cronoSeconds = 0;
  }
}