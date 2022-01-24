import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CalendarComponent } from './calendar/calendar.component';
import { ClockComponent } from './clock/clock.component'

@NgModule({
  declarations: [CalendarComponent, ClockComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CalendarComponent, ClockComponent]
})
export class PracticalQuizzJobModule { }
