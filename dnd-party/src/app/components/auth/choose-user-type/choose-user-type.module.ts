import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiHintModule } from '@taiga-ui/core';
import { ChooseUserTypeComponent } from './choose-user-type.component';

@NgModule({
  declarations: [ChooseUserTypeComponent],
  imports: [CommonModule, RouterModule, TuiHintModule],
  exports: [ChooseUserTypeComponent],
})
export class ChooseUserTypeModule {}
