import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignOutComponent } from './sign-out/sign-out.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component:  SigninComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'signout', component: SignOutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
