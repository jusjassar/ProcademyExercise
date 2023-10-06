import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
  reactiveForm!:FormGroup;
ngOnInit(){
  this.reactiveForm = new FormGroup({
    firstname: new FormControl('Jhon'),
    lastname: new FormControl(null),
    email: new FormControl(null),
    gender:new FormControl('male'),
    hobbies:new FormControl('sports'),
    country:new FormControl()

  })
}
onSubmit(){
  console.log(this.reactiveForm)

}
}
