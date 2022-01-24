import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  countdownInterval:any;
  countdownRunning = false;
  countdownNormalMode = true;

  countdownForm = this.formBuilder.group({
    hours: [0, [Validators.min(0)]],
    minutes: [0, [Validators.min(0), Validators.max(59)]],
    seconds: [0, [Validators.min(0), Validators.max(59)]]
  });

  constructor(private formBuilder: FormBuilder) {
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

  onSubmit(): void {
    let v1 = this.countdownForm.get('hours');
    let v2 = this.countdownForm.get('minutes');
    let v3 = this.countdownForm.get('seconds');
    this.countdownHours = v1?.valid && v1.value!=null ? v1.value : 0;
    this.countdownMinutes = v2?.valid && v2.value!=null ? v2.value : 0;
    this.countdownSeconds = v3?.valid && v3.value!=null ? v3.value : 0;
    this.countdownForm.reset();

    this.countdownNormalMode = true;
  }

  changeMode(mode:string){
    this.show = mode;
  }

  setTimeCountdown(){
    this.countdownNormalMode = false;
  }

  restartAll(){
    this.stopCrono();
    clearInterval(this.intervalId);
  }

  startCountdown(){
    let action = () => {
      this.countdownSeconds-=1;
      if(this.countdownSeconds<0){
        this.countdownSeconds = 59;
        this.countdownMinutes-=1;
        if(this.countdownMinutes<0){
          this.countdownMinutes=59;
          this.countdownHours-=1;
          if(this.countdownHours<0){
            this.stopCountdown();
            window.alert('Countdown finished!');
          } 
        }
      }
    };
    if(!this.countdownRunning){
      action();
      this.countdownInterval = setInterval(action, 1000);
      this.countdownRunning = true;
    }
  }

  pauseCountdown(){
    if(this.countdownRunning){
      clearInterval(this.countdownInterval);
      this.countdownRunning = false;
    }
  }

  stopCountdown(){
    this.pauseCountdown();
    this.countdownHours = 0;
    this.countdownMinutes = 0;
    this.countdownSeconds = 0;
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
    if(this.cronoRunning){
      clearInterval(this.cronoInterval);
      this.cronoRunning = false;
    }
  }

  stopCrono() {
    this.pauseCrono();
    this.cronoHours = 0;
    this.cronoMinutes = 0;
    this.cronoSeconds = 0;
    this.cronoMiliseconds = 0;
  }
}