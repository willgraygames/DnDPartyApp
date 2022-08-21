import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { TuiTabsModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiTabsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
