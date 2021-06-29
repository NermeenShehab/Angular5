
import { Injectable } from '@angular/core';
import { Depart } from '../models/depart';

@Injectable({
  providedIn: 'root'
})
export class DepartSerService {
  //array of mydepart data
  private departList: Depart[] = [
    new Depart(1, "Marketing department", 20),
    new Depart(2, "financial department", 30),
    new Depart(3, "Customer Service Department", 15),
    new Depart(4, "Department of Human Resources", 25),
    new Depart(5, "Manufacturing and Quality Department", 50),
  ];

  //crud operation on departList
  listdepart() {
    return this.departList;
  }


  adddepart(dept: Depart) {
    this.departList.push(new Depart(dept.departid, dept.departname, dept.capacity))
  }

  detailsdepart=new Depart();
  details(id:Number) {
    this.departList.forEach(a => {
      if (a.departid == id) {
        this.detailsdepart=a;
        this.detailsdepart = a;
      }

    });
  }

  Deletedepart(departid:Number) {
    if (confirm("are you sure want to delete this student data?")) {
      let i = -1;
      this.departList.forEach(item => {
        i++;
        if (item.departid == departid) {
          this.departList.splice(i, 1);
         
        }

      });
    }
  }


 deptedit=new Depart();
 Edit(id:number){
  this.departList.forEach(dep =>{
     if(dep.departid == id){
       this.deptedit.departid=dep.departid
       this.deptedit.departname = dep.departname
       this.deptedit.capacity = dep.capacity
     }
   });
 }

 save(id:any){
  this.departList.forEach(dep =>{
    if(dep.departid == id){
      dep.departid = this.deptedit.departid
      dep.departname= this.deptedit.departname
      dep.capacity = this.deptedit.capacity
     
    }
  })


}









}
