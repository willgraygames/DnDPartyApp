import { Component, Input, OnInit } from '@angular/core';
import { Stat } from './stat';

@Component({
  selector: 'stat-bubble',
  templateUrl: './stat-bubble.component.html',
  styleUrls: ['./stat-bubble.component.scss']
})
export class StatBubbleComponent implements OnInit {

  @Input() statName?: string;
  @Input() statValue?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
