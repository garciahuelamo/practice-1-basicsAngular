import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdataElementComponent } from './formdata-element.component';

describe('FormdataElementComponent', () => {
  let component: FormdataElementComponent;
  let fixture: ComponentFixture<FormdataElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormdataElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdataElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
