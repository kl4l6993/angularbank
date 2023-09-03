import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Happy Banking with us";
  data2="Enter Account No";
  acnos:string="";
  psws:string="";

login()
{
// alert("Login Clicked");
console.log(this.acnos);
console.log(this.psws);
}
acno(event:any)
{
console.log(event.target.value);

}
pasw(event:any)
{
  console.log(event.target.value);
}

}

