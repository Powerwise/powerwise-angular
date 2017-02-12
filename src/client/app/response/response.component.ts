import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';

import * as resp from '../shared/actions/response.actions';
import * as user from '../shared/actions/user.actions';
import * as fromRoot from '../shared/reducers/index';

@Component({
  moduleId: module.id,
  selector: 'sd-response',
  templateUrl: 'response.component.html'
})
export class ResponseComponent implements OnInit {
  devices: any;
  loading: any;
  potential: any;
  previous: any;
  hasSelected: any;
  constructor(
      private store: Store<fromRoot.State>, public route: ActivatedRoute) {}

  ngOnInit() {
    let eventId = this.route.snapshot.params['eventId'];
    let email = this.route.snapshot.queryParams['email'];
    this.store.dispatch(new user.RegisterAction({email}));
    this.store.dispatch(new resp.SelectEventAction(eventId));
    this.devices = this.store.select(fromRoot.getDevices);
    this.potential = this.store.select(fromRoot.getSelectedPotential);
    this.loading = this.store.select(fromRoot.getSelectionLoading);
    this.previous = this.store.select(fromRoot.previousSelection);
    this.hasSelected = this.store.select(fromRoot.selectionAlreadyMade);
  }
  onSelect(checked: boolean, payload: string) {
    if (checked) {
      this.store.dispatch(new resp.AddAction(payload));
    } else {
      this.store.dispatch(new resp.RemoveAction(payload));
    }
  }
  onSave() {
    this.store.dispatch(new resp.SubmitAction());
  }
}
