import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/models/depart';
import { DepartSerService } from 'src/app/_services/depart-ser.service';


@Component({
  selector: 'app-depart-list',
  templateUrl: './depart-list.component.html',
  styleUrls: ['./depart-list.component.css']
})
export class DepartListComponent implements OnInit {
  // show list of department
  //1-create obj from depart service
  //2-call fn return obj from depart service in constructor
  departments:Depart[]=[]
  
 
  constructor(public departserve:DepartSerService ) {
    
   }
   
  ngOnInit(): void {
    this.departments= this.departserve.listdepart();
    

  }
 
  
}
