import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartAddComponent } from './department/depart-add/depart-add.component';
import { DepartDetailsComponent } from './department/depart-details/depart-details.component';
import { DepartEditComponent } from './department/depart-edit/depart-edit.component';
import { DepartListComponent } from './department/depart-list/depart-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"contactus",component:ContactUsComponent},
{path:"aboutus",component:AboutUsComponent},
// {path:"",component:HomeComponent},
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"departments",component:DepartListComponent},
{path:"departments/add",component:DepartAddComponent},
{path:"departments/details/:id",component:DepartDetailsComponent},
{path:"departments/edit/:id",component:DepartEditComponent},
{path:"**",component:NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
