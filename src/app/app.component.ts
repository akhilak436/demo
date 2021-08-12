import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  firstname:string="akhila";
  lastname:string="kankanala";
  isDisabled:boolean=true;
  num:number=7;
  value:string="akhila reddy";

  todaydate=new Date();
  jsonval={name:'akhila',age:'25',gender:'female'};

  months:string[]=["jan","feb","mar","apr","june","july"];

  onSubmit(){
    alert("welcome to angular")
    console.log("hello world");
  }
}
