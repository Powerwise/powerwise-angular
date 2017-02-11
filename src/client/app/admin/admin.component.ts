import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

import * as shedding from '../shared/actions/shedding.actions';
import * as fromRoot from '../shared/reducers/index';

/**
 * This class represents the lazy loaded AdminComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent {
  loading: Observable<boolean>;
  event: Observable<any>;
  constructor(private store: Store<fromRoot.State>) {
    this.loading = store.select(fromRoot.getSheddingLoading);
    this.event = store.select(fromRoot.getSheddingEvent);
  }
  createEvent() {
    let payload = {timestamp: Date.now(), duration: 60 * 25};
    this.store.dispatch(new shedding.CreateAction(payload));
  }
}
