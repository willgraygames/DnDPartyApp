import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DungeonFirestoreService } from 'src/app/core/dungeon-firestore.service';
import { TEST_INITIATIVE } from 'src/app/test-data/test-initiative';
import { Member } from '../../member';

@Component({
  selector: 'initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.scss'],
})
export class InitiativeTrackerComponent implements OnInit {
  @Input() members$: Observable<Member[]>;

  constructor(private readonly dungeonService: DungeonFirestoreService) {}

  initiative = TEST_INITIATIVE;
  ngOnInit(): void {
    this.members$ = this.dungeonService.getAll();
    console.log(this.members$);
    this.initiative.sort((a, b) => 0 - (a.initiative < b.initiative ? -1 : 1));
  }

  cycleInitiative(): void {
    this.initiative.push(this.initiative.shift()!);
  }
}
