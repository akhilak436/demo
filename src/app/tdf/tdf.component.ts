import { Component, OnInit } from '@angular/core';
import { Login } from 'D:/angular_programs/my-first-app/src/app/login';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

userform=new Login("akhila reddy","akhilakankanala@gmail.com","welcome1");
  
onSubmit(myform:any){
  console.log(myform.value);

}

  ngOnInit(): void {
  }

}


  