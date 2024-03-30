import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonPlayComponent } from '../button-play/button-play.component';
import { Router } from '@angular/router';
import { FormComponentComponent } from '../form-component/form-component.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NgOptimizedImage,ButtonPlayComponent,FormComponentComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
 constructor(private router: Router) {}

 showForm = false;
onButtonClick() {
    this.showForm = true;
  }
}
