import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesImageComponent } from './advantages-image.component';

describe('AdvantagesImageComponent', () => {
  let component: AdvantagesImageComponent;
  let fixture: ComponentFixture<AdvantagesImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantagesImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
