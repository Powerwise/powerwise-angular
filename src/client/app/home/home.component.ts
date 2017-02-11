import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

import * as user from '../shared/actions/user.actions';
import {NameListService} from '../shared/name-list/name-list.service';
import * as fromRoot from '../shared/reducers/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  loading: Observable<boolean>;
  form: FormGroup;
  constructor(private store: Store<fromRoot.State>, public fb: FormBuilder) {
    this.loading = store.select(fromRoot.getLoading);
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
