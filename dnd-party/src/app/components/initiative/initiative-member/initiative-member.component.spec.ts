import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeMemberComponent } from './initiative-member.component';

describe('InitiativeMemberComponent', () => {
  let component: InitiativeMemberComponent;
  let fixture: ComponentFixture<InitiativeMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiativeMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
