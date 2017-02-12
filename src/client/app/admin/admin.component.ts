import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class AdminComponent implements OnInit, OnDestroy {
  loading: Observable<boolean>;
  event: Observable<any>;
  devices: Observable<any>;
  total: Observable<any>;
  interval: any;
  constructor(private store: Store<fromRoot.State>) {}
  ngOnInit() {
    this.loading = this.store.select(fromRoot.getSheddingLoading);
    this.event = this.store.select(fromRoot.getSheddingEvent);
    this.devices = this.store.select(fromRoot.getSheddingDevices);
    this.total = this.store.select(fromRoot.totalKillowats);
    this.interval = setInterval(() => {
      this.getDevices();
    }, 2000);
  }
  getDevices() {
    this.store.dispatch(new shedding.GetDevicesAction());
  }
  createEvent() {
    let payload = {timestamp: Date.now(), duration: 60 * 25};
    this.store.dispatch(new shedding.CreateAction(payload));
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
