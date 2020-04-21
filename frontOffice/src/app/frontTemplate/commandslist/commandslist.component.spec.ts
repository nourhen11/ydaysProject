import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandslistComponent } from './commandslist.component';

describe('CommandslistComponent', () => {
  let component: CommandslistComponent;
  let fixture: ComponentFixture<CommandslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
