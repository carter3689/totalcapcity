import { Component, Input, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  contactForm: FormGroup;
  email:string = '';

  constructor(private fb : FormBuilder){
    this.contactForm = fb.group({
      'email': ['',Validators.required],
    });
  }

  addEmail(customeremail){
    this.email = customeremail.email;
    console.log(this.email)
    this.contactForm.reset();
  }
}
