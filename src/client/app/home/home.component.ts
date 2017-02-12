import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

import * as device from '../shared/actions/device.actions';
import * as user from '../shared/actions/user.actions';
import {AddDeviceComponent} from '../shared/add-device/add-device.component';
import {NameListService} from '../shared/name-list/name-list.service';
import * as fromRoot from '../shared/reducers/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  loading: Observable<boolean>;
  saving: Observable<boolean>;
  registered: Observable<boolean>;
  potential: Observable<number>;
  user: Observable<any>;
  devices: Observable<any>;
  form: FormGroup;
  dialogRef: MdDialogRef<any>;
  config: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {top: '', bottom: '', left: '', right: ''}
  };
  constructor(
      private store: Store<fromRoot.State>, public fb: FormBuilder,
      public dialog: MdDialog) {
    this.devices = this.store.select(fromRoot.getDevices);
    this.saving = this.store.select(fromRoot.getDeviceLoading);
    this.potential = this.store.select(fromRoot.devicePotential);
  }

  onAdd() {
    this.dialogRef = this.dialog.open(AddDeviceComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      if (result && result.type === 'CREATE') {
        this.store.dispatch(new device.AddAction(result.payload));
        this.store.dispatch(new device.SaveAction());
      }
    });
  }
}
