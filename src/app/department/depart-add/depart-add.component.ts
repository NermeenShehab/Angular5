import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Depart } from 'src/app/models/depart';
import { DepartSerService } from 'src/app/_services/depart-ser.service';

@Component({
  selector: 'app-depart-add',
  templateUrl: './depart-add.component.html',
  styleUrls: ['./depart-add.component.css']
})
export class DepartAddComponent implements OnInit {
 
  dept:Depart= new Depart();

 save(){
  this.departserve.adddepart(this.dept);
  this.rout.navigateByUrl("/departments")
 }  
 
//  addFalg = false;
//   btnValue="Show Add"
//   showAndHide(){
//     this.addFalg = !this.addFalg
//     if(this.addFalg) this.btnValue = "Hide"
//     else this.btnValue="Show Add"
//   }

  constructor(public departserve:DepartSerService ,public rout:Router) { }

  ngOnInit(): void {
  }

}
