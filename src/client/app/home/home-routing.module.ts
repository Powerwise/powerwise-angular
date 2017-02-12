import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RegisterComponent} from '../register/register.component';
import {ResponseComponent} from '../response/response.component';

import {HomeComponent} from './home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'response/:eventId', component: ResponseComponent}
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
