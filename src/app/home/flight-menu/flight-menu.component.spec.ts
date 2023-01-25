import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightMenuComponent } from './flight-menu.component';

describe('FlightMenuComponent', () => {
  let component: FlightMenuComponent;
  let fixture: ComponentFixture<FlightMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
