import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatBubbleComponent } from './stat-bubble.component';



@NgModule({
  declarations: [StatBubbleComponent],
  imports: [
    CommonModule
  ],
  exports: [StatBubbleComponent]
})
export class StatBubbleModule { }
