import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterElementComponent } from './counter-element.component';

describe('CounterElementComponent', () => {
  let component: CounterElementComponent;
  let fixture: ComponentFixture<CounterElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
