import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletechambreComponent } from './deletechambre.component';

describe('DeletechambreComponent', () => {
  let component: DeletechambreComponent;
  let fixture: ComponentFixture<DeletechambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletechambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletechambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
