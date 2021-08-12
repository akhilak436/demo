import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm=new FormGroup({
    username:new FormControl('sunny',[Validators.minLength(6),Validators.required]),
    email:new FormControl('kankanamla'),
    password: new FormControl('Welcome'),
    confirmpassword:new FormControl('welcome')
  });
  constructor() { }
  

  onSubmit(){
    console.log(this,this.myForm.value);
  }


  ngOnInit(): void {
   
  }

}
