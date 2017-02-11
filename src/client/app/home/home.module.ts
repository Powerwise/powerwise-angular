import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {ResponseComponent} from '../response/response.component';
import {NameListService} from '../shared/name-list/name-list.service';
import {SharedModule} from '../shared/shared.module';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [HomeComponent, ResponseComponent],
  exports: [HomeComponent, ResponseComponent],
  providers: [NameListService]
})
export class HomeModule {
}
