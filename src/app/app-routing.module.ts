import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ruteo
import { HomeComponent } from "./home/home.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: SobreMiComponent },
  { path: 'Login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
