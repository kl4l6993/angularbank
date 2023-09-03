import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Happy Banking with us";
  data2="Enter Account No";

login(a:any,b:any)
{
  console.log(a.value);
  console.log(b.value);
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

