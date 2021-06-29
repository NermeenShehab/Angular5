import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { DepartSerService } from 'src/app/_services/depart-ser.service';

@Component({
  selector: 'app-depart-edit',
  templateUrl: './depart-edit.component.html',
  styleUrls: ['./depart-edit.component.css']
})
export class DepartEditComponent implements OnInit {






  constructor(public dep:DepartSerService ,public actroute:ActivatedRoute){ }

  ngOnInit(): void {
    this.dep.save(this.actroute.snapshot.params["id"])
  }

}
