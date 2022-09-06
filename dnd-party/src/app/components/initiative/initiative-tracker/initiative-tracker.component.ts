import { Component, Input, OnInit } from '@angular/core';
import { doc } from 'firebase/firestore';
import { first, firstValueFrom, map, Observable, take } from 'rxjs';
import { DungeonFirestoreService } from 'src/app/core/services/dungeon/dungeon-firestore.service';
import { TEST_INITIATIVE } from 'src/app/test-data/test-initiative';
import { Character } from '../../character';

@Component({
  selector: 'initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.scss'],
})
export class InitiativeTrackerComponent implements OnInit {
  characters$: Observable<Character[]>;
  characters: Character[] = [];

  constructor(private readonly dungeonService: DungeonFirestoreService) {}

  initiative = TEST_INITIATIVE;
  ngOnInit(): void {
    this.characters$ = this.dungeonService.getAll();
    this.setMemberData();
  }

  cycleInitiative(): void {
    this.characters.push(this.characters.shift()!);
  }

  async setMemberData() {
    this.characters$
      .pipe(
        map((data) =>
          data.sort((a, b) => 0 - (a.initiative < b.initiative ? -1 : 1))
        )
      )
      .subscribe((results) => {
        this.characters = results;
      });
  }
}
