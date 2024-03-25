import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  //here we have to write the service class of the class(where the class is defined)
 providers:[UserService]
})
export class SignupComponent implements OnInit{
  //for making the reactive form we are declaring it with this variable name(signupForm) 
  //formGroup -this makes the normal form to reactive form 
  //we need to write the formGroup inside the <form >tag in the html
signupForm: FormGroup;
  //  signup
  //for initializing the reactive form we write variableName:FormBuilder
  //whatever  module or class we are going to use in the component it should be initialized in the constructor
    constructor(private fb:FormBuilder,private service:UserService)
    {
       
    }
    //when the html page is loaded then ngOnInit method is called automatically
    // here we are initializing each and every variable being used in the form 
   ngOnInit():void{
    this.signupForm=this.fb.group({
      firstName:[''],
    lastName:[''],
    address:[''],
    gender:[''],
    state:[''],
    city:[''],
    pincode:[],
    phoneNo:[],
    password:[''],
    memberId:[],
    dob:[''],
    emailId:['']
    })
  
    this.signup
   }
    signup()
   {
    //if we want to see any data being entered to a specific field we write console.log
    console.log(this.signupForm.value)
    //here 'this.signupForm.value' is equivalent to  user object because we have used the same form control names as we had declared
    //in the user class
    this.service.signup(this.signupForm.value)
    .subscribe(data=>{
      alert('signup successful')
      // this.router.navigate(["/login"])
   })
   }
}
