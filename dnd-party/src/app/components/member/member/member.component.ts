import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DungeonFirestoreService } from 'src/app/core/services/dungeon/dungeon-firestore.service';
import { Member } from './member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  allMembers$: Observable<Member[]>;
  selectedMember: Member;

  constructor(private readonly dungeonService: DungeonFirestoreService) {}

  ngOnInit(): void {
    this.allMembers$ = this.dungeonService.getAll();
  }
}
