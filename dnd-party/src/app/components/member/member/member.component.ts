import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DungeonFirestoreService } from 'src/app/core/dungeon-firestore.service';
import { Member } from './member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  members$: Observable<Member[]>;
  selectedMember: Member;

  constructor(private readonly dungeonService: DungeonFirestoreService) {}

  ngOnInit(): void {
    this.members$ = this.dungeonService.getAll();
  }
}
