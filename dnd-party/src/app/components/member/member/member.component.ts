import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DungeonFirestoreService } from 'src/app/core/services/dungeon/dungeon-firestore.service';
import { Character } from '../../character/character';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  constructor(private readonly dungeonService: DungeonFirestoreService) {}

  ngOnInit(): void {}
}
