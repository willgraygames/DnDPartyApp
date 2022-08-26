import { Component, Input, OnInit } from '@angular/core';
import { doc } from 'firebase/firestore';
import { first, firstValueFrom, map, Observable, take } from 'rxjs';
import { DungeonFirestoreService } from 'src/app/core/dungeon-firestore.service';
import { TEST_INITIATIVE } from 'src/app/test-data/test-initiative';
import { Member } from '../../member';

@Component({
  selector: 'initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.scss'],
})
export class InitiativeTrackerComponent implements OnInit {
  members$: Observable<Member[]>;
  members: Member[] = [];

  constructor(private readonly dungeonService: DungeonFirestoreService) {}

  initiative = TEST_INITIATIVE;
  ngOnInit(): void {
    this.members$ = this.dungeonService.getAll();
    this.setMemberData();
  }

  cycleInitiative(): void {
    this.members.push(this.members.shift()!);
  }

  async setMemberData() {
    this.members$
      .pipe(
        map((data) =>
          data.sort((a, b) => 0 - (a.initiative < b.initiative ? -1 : 1))
        )
      )
      .subscribe((results) => {
        this.members = results;
      });
  }
}
