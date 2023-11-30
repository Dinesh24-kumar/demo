import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  displayMsg : string = '';
  isFormCreated: boolean = false;

  constructor(private authService: AuthService ){}

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname: new FormControl("",
    [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*')
    ]),
    lastname : new FormControl("",
    [
      Validators.required,
      Validators.maxLength(3),
      Validators.pattern('[a-zA-Z].*')
    ]),
    empid : new FormControl("",
    [
      Validators.required,
      Validators.maxLength(3),
      Validators.pattern('[0-9].*')
    ]) 
  }); 
  
  registerSumbmitted(){
    console.log(this.registerForm,'sumbitted');
    alert("Form is Sumbitted");

    this.authService.RegisterUser([
      this.registerForm.value.firstname as String,
      this.registerForm.value.lastname as String,
      this.registerForm.value.empid as String
    ])
    .subscribe((res)=>{
      if(res == 'Sucess'){
        this.displayMsg = 'Form is Submitted!!';
        this.isFormCreated = true;
        this.registerForm.reset();
      }
      else{
        this.displayMsg = 'Form is not Submitted !!';
        this.isFormCreated = false;
          } 
  });
  }  


get Fname(): FormControl{
  return this.registerForm.get('firstname') as FormControl;
}

get Lname(): FormControl{
  return this.registerForm.get('lastname') as FormControl;
}

get Empid(): FormControl{
  return this.registerForm.get('empid') as FormControl;
}
}

