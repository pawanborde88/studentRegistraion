import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationsComponent } from './pages/registrations/registrations.component';
import { AlllistsComponent } from './pages/alllists/alllists.component';
import { StartingpageComponent } from './pages/startingpage/startingpage.component';

const routes: Routes = [
  {
    path:'*',
    redirectTo:'startingpage',
    pathMatch:'full'
  },
  {
    path:"startingpage",
    component:StartingpageComponent
  },
  {
    path:"registraion",
    component:RegistrationsComponent
  },
  {
    path:"alllists",
    component:AlllistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
