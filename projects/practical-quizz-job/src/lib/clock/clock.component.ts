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
  cronoMiliseconds = 0;
  cronoInterval:any;
  cronoRunning = false;

  countdownHours = 0;
  countdownMinutes = 0;
  countdownSeconds = 5;
  countDownInterval:any;
  countDownRunning = false;

  constructor() {
    // Ejecuta el metodo en el intervalo dado
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.restartAll();
  }

  changeMode(mode:string){
    this.show = mode;
  }

  restartAll(){
    this.stopCrono();
    clearInterval(this.intervalId);
  }

  startCountdown(){
    if(this.countDownRunning){
      this.countDownInterval = setInterval(()=>{
        this.countdownSeconds-=1;
        if(this.countdownSeconds<0){
          this.countdownSeconds = 60;
          this.countdownMinutes-=1;
          if(this.countdownMinutes<0){
            this.countdownMinutes=60;
            this.countdownHours-=1;
            if(this.countdownHours<0) this.stopCountdown();
          }
        }
      }, 1000);
    }
    this.countDownRunning = true;
  }

  setCountdown(hours:number, minutes:number, seconds:number){
    this.countdownHours=hours;
    this.countdownMinutes=minutes;
    this.countdownSeconds=seconds;
  }

  stopCountdown(){
    this.countdownHours = 0;
    this.countdownMinutes = 0;
    this.countdownSeconds = 0;

    clearInterval(this.countDownInterval);
    this.countDownRunning = false;
  }

  startCrono(){
    if(!this.cronoRunning){
      this.cronoInterval = setInterval(()=>{
        this.cronoMiliseconds+=1;
        if(this.cronoMiliseconds==100){
          this.cronoMiliseconds = 0;
          this.cronoSeconds+=1;
          if(this.cronoSeconds == 60){
            this.cronoSeconds = 0;
            this.cronoMinutes+=1;
  
            if(this.cronoMinutes==60){
              this.cronoMinutes=0;
              this.cronoHours+=1;
            }
          }
        }
      });
      this.cronoRunning = true;
    }
  }

  pauseCrono(){
    clearInterval(this.cronoInterval);
    this.cronoRunning = false;
  }

  stopCrono() {
    this.pauseCrono();
    this.cronoHours = 0;
    this.cronoMinutes = 0;
    this.cronoSeconds = 0;
    this.cronoMiliseconds = 0;
  }
}