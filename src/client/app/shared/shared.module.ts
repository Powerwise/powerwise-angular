import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {AddDeviceComponent} from './add-device/add-device.component';
import {ApiService} from './api/api.service';
import {NameListService} from './name-list/name-list.service';
import {NavbarComponent} from './navbar/navbar.component';
import {ToolbarComponent} from './toolbar/toolbar.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded
 * module.
 */

@NgModule({
  imports: [
    CommonModule, RouterModule, MaterialModule.forRoot(), ReactiveFormsModule
  ],
  declarations: [ToolbarComponent, NavbarComponent, AddDeviceComponent],
  exports: [
    ToolbarComponent, NavbarComponent, CommonModule, ReactiveFormsModule,
    RouterModule, MaterialModule
  ],
  entryComponents: [AddDeviceComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: SharedModule, providers: [NameListService, ApiService]};
  }
}
