import { Component, Input, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  contactForm: FormGroup;
  email:string = '';


  constructor(private fb : FormBuilder,private af: AngularFireDatabase){
    this.contactForm = fb.group({
      'email': ['',Validators.required],
    });
  }

  addEmail(customeremail){
    this.email = customeremail.email;
    console.log(this.email)
    this.af.list('/emails').push(this.email)
    this.contactForm.reset()
  }
}
