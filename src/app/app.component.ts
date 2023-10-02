import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProcademyExercise';
  countryName='india';
  firstName!:string;
  gender=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
    {id:'3',value:'other'}
  ]
  defaultGender='Male'
  @ViewChild('myForm') form!:NgForm
  onSubmit(){
    console.log(this.form)
  }
}
