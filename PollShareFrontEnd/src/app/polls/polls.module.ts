import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll/poll.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';



@NgModule({
  declarations: [PollComponent, PollDetailComponent],
  imports: [
    CommonModule
  ]
})
export class PollsModule { }
