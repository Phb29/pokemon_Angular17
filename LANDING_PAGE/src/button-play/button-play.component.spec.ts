import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { ButtonPlayComponent } from './button-play.component';
import { NgModule } from '@angular/core';

describe('ButtonPlayComponent', () => {
  let component: ButtonPlayComponent;
  let fixture: ComponentFixture<ButtonPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPlayComponent,MatButtonModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
