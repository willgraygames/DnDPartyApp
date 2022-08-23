import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { InitiativeMember } from './initiative-member';

@Component({
  selector: 'initiative-member',
  templateUrl: './initiative-member.component.html',
  styleUrls: ['./initiative-member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitiativeMemberComponent implements OnInit {

  constructor() { }

  @Input() member?: InitiativeMember;
  expanded = false;

  ngOnInit(): void {

  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

}
