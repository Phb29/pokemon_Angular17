import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormServiceService } from '../service/form-service.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatSnackBarModule],
providers: [
   FormServiceService
  ],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent {
 Form!: FormGroup;
  loading = signal(false);

constructor(private service: FormServiceService,private snackBar: MatSnackBar) { this.Form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

onSubmit(){
    this.loading.set(true);
    if(this.Form.valid){
      this.service.sendForm(this.Form.value.name, this.Form.value.email).subscribe({
        next: () => {
          this.Form.reset();
          this.loading.set(false);
  this.snackBar.open('Registration form submitted successfully.', 'Close', {
      duration: 5000,
horizontalPosition: 'center', 
      verticalPosition: 'top',
    });
        },
        error: () => this.loading.set(false)
      })
    }
  }
}