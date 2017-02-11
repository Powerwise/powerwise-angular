import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as resp from '../shared/actions/response.actions';
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
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.devices = this.store.select(fromRoot.getDevices);
    this.potential = this.store.select(fromRoot.getSelectedPotential);
  }
  onSelect(checked: boolean, payload: string) {
    if (checked) {
      this.store.dispatch(new resp.AddAction(payload));
    } else {
      this.store.dispatch(new resp.RemoveAction(payload));
    }
  }
}
