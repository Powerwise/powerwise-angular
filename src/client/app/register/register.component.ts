import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

import * as device from '../shared/actions/device.actions';
import * as user from '../shared/actions/user.actions';
import {AddDeviceComponent} from '../shared/add-device/add-device.component';
import {NameListService} from '../shared/name-list/name-list.service';
import * as fromRoot from '../shared/reducers/index';


@Component({
  moduleId: module.id,
  selector: 'sd-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  loading: Observable<boolean>;
  registered: Observable<boolean>;
  form: FormGroup;
  constructor(private store: Store<fromRoot.State>, public fb: FormBuilder) {
    this.loading = this.store.select(fromRoot.getUserLoading);
    this.registered = this.store.select(fromRoot.getUserRegistered);
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group(
        {email: ['probinson+1@nextfaze.com'], postcode: ['5006']});
  }
  register(payload: any) {
    this.store.dispatch(new user.RegisterAction(payload));
  }
}
