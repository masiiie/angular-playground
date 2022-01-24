import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar/calendar.component';
import { ClockComponent } from './clock/clock.component'



@NgModule({
  declarations: [CalendarComponent, ClockComponent],
  imports: [
    CommonModule
  ],
  exports: [CalendarComponent, ClockComponent]
})
export class PracticalQuizzJobModule { }
