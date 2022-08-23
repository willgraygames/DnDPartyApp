import { Component, OnInit } from '@angular/core';
import { TEST_INITIATIVE } from 'src/app/test-data/test-initiative';

@Component({
  selector: 'initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.scss']
})
export class InitiativeTrackerComponent implements OnInit {

  constructor() { }

  initiative = TEST_INITIATIVE;
  ngOnInit(): void {
    this.initiative.sort((a,b) => 0 - (a.initiative < b.initiative ? -1 : 1));
  }

  cycleInitiative(): void {
    this.initiative.push(this.initiative.shift()!);
  }

}
