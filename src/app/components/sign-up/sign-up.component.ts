import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupUsers:any[] = [];

  signupObj:any = {
    userName:'',
    email:'',
    password:'',
  };
  formSubmitted: boolean=false;

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signinForm= new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])

    // tick:new FormControl('',[Validators.required])
  })

  signInUser(){
    this.formSubmitted=true
    this.signupUsers.push(this.signupObj)
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers)),

  

    console.log(this.signinForm.value);
    this.router.navigate(['/login']);
  }

  register(){
    this.router.navigate(['/login']);

  }

  validationErrorExists() {
    return ((this.formSubmitted || this.signinForm.dirty) && !this.signinForm.valid);
  }

}
