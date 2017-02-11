import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as device from '../actions/device.actions';
import {ApiService} from '../api/api.service';
import * as fromRoot from '../reducers/index';

@Injectable()
export class DeviceEffects {
  @Effect()
  save$: Observable<Action> =
      this.actions$.ofType(device.ActionTypes.SAVE)
          .switchMap(
              (action: device.SaveAction) =>
                  this.store.select(fromRoot.userAndDevices).take(1))
          .switchMap(({user, devices}) => {
            return this.api.save({email: user.email, devices})
                .map(payload => new device.SaveCompleteAction(payload));
          });
  constructor(
      private actions$: Actions, private api: ApiService,
      public store: Store<any>) {}
}
