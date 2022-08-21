import { Component, OnInit } from '@angular/core';
import { InitiativeMember } from './initiative-member';

@Component({
  selector: 'initiative-member',
  templateUrl: './initiative-member.component.html',
  styleUrls: ['./initiative-member.component.scss']
})
export class InitiativeMemberComponent implements OnInit {

  constructor() { }

  member?: InitiativeMember;

  ngOnInit(): void {
  }

}
