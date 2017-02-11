import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as resp from '../actions/response.actions';
import {ApiService} from '../api/api.service';
import * as fromRoot from '../reducers/index';

@Injectable()
export class ResponseEffects {
  @Effect()
  save$: Observable<Action> =
      this.actions$.ofType(resp.ActionTypes.SUBMIT)
          .switchMap(
              (action: resp.SubmitAction) =>
                  this.store.select(fromRoot.getSelecteEventAndDevices).take(1))
          .switchMap((payload) => {
            return this.api.respond(payload).map(
                payload => new resp.SubmitSuccessAction(payload));
          });
  constructor(
      private actions$: Actions, private api: ApiService,
      public store: Store<any>) {}
}
