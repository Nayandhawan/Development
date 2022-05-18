import { Component } from '@angular/core';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation
  title = 'blog';
  author = 'Nayan';
  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
/*   myEvent(event){
      console.log(event)
  }
  keyup(event){
    console.log(event)
}
keydown(event){
    console.log(event)
}
  getSurname(name){
    alert(name)
  }
  getName(){
    return 'Dhawan'
  }
  obj={
    name: 'Nayan',
    age:20
  }
  arr=['nayan','dhawan',20,'Ayan','Das']
  SiteUrl=window.location.href;
  
  //Component

  //Get Textbox value
  currentVal="";
  getVal(val){
    console.log(val)
    this.currentVal=val;
  }
  //Property binding in angular
  disabledBox=true
  enableBox(){
    this.disabledBox=false
  }
  name="Nayan"
  show=false;
  nshow="green"
  choice
  nextChoice(){
    this.choice=2
  }
  color='orange';
  data=['nayan','aditi','akhil','ayan']
  data1=[
    {
      name: 'nayan',
      age:23,
      color:'Black/Olive'
    },
    {
      name: 'aditi',
      age:23,
      color:'Black/Olive'
    }
  ]
  getUserValue(value){
    console.log(value)
  } */
  color="orange"
  err=false
  updateColor(){
    this.color="blue"
  }
}
