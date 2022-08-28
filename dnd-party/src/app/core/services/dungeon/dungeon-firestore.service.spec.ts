import { TestBed } from '@angular/core/testing';

import { DungeonFirestoreService } from './dungeon-firestore.service';

describe('DungeonFirestoreService', () => {
  let service: DungeonFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DungeonFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
