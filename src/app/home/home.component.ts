import { Component } from '@angular/core';
import { DataService } from '../bankservice/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sdata:any

 constructor (private ds:DataService)
 {
 }
 ngOnInit(): void{
  setTimeout(()=>{
    this.ds.serviceMethod(),2000}
  )
  this.sdata=this.ds.datas;
 }
}

