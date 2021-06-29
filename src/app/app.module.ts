import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DepartListComponent } from './department/depart-list/depart-list.component';
import { DepartAddComponent } from './department/depart-add/depart-add.component';
import { FormsModule } from '@angular/forms';
import { DepartDetailsComponent } from './department/depart-details/depart-details.component';
import { DepartEditComponent } from './department/depart-edit/depart-edit.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartListComponent,
    DepartAddComponent,

    DepartDetailsComponent,
    DepartEditComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
