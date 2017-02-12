import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
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
export class RegisterComponent implements OnInit, OnDestroy {
  loading: Observable<boolean>;
  registered: Observable<boolean>;
  form: FormGroup;
  reg: any;
  constructor(
      private store: Store<fromRoot.State>, public fb: FormBuilder,
      public route: ActivatedRoute, public router: Router) {
    this.loading = this.store.select(fromRoot.getUserLoading);
    this.registered = this.store.select(fromRoot.getUserRegistered);
    this.reg = this.registered.subscribe((val) => {
      if (val) this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    let email = this.route.snapshot.queryParams['email'];
    this.createForm(email);
  }

  createForm(email = '') {
    this.form = this.fb.group({
      email: [email, Validators.required],
      postcode: ['', Validators.required]
    });
  }
  register(payload: any) {
    this.store.dispatch(new user.RegisterAction(payload));
  }
  ngOnDestroy() {
    this.reg.unsubscribe();
  }
}
