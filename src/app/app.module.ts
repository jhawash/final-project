import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './movie.service';
import { AppUserService } from './app-user.service';
import { LoginComponent } from './login/login.component';

import { routes } from './app.router';

// import { ClarityModule } from '@clr/angular';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'movie/:movieID', component: MovieComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    LoginComponent,
  ],
  imports: [
    // ClarityModule,
    // BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
  ],
  providers: [ MovieService, AppUserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }