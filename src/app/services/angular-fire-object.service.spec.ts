import { TestBed } from '@angular/core/testing';

import { AngularFireObjectService } from './angular-fire-object.service';

describe('AngularFireObjectService', () => {
  let service: AngularFireObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFireObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
