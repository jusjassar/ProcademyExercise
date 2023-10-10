import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

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
    personalDetails:new FormGroup({
      firstname: new FormControl('Jhon',Validators.required),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email])
    }),
    gender:new FormControl('male'),
    hobbies:new FormControl('sports'),
    country:new FormControl()

  })
}
onSubmit(){
  console.log(this.reactiveForm)

}
}
