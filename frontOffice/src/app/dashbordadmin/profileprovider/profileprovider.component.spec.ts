import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileproviderComponent } from './profileprovider.component';

describe('ProfileproviderComponent', () => {
  let component: ProfileproviderComponent;
  let fixture: ComponentFixture<ProfileproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
