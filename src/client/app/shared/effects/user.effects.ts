import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as user from '../actions/user.actions';
import {ApiService} from '../api/api.service';

@Injectable()
export class UserEffects {
  @Effect()
  register$: Observable<Action> =
      this.actions$.ofType(user.ActionTypes.REGISTER)
          .map((action: user.RegisterAction) => action.payload)
          .switchMap(payload => {
            return this.api.register(payload).map(payload => {
              return new user.RegisterCompleteAction(payload);
            });
          });
  @Effect()
  goHome$: Observable<Action> =
      this.actions$.ofType(user.ActionTypes.REGISTER_COMPLETE)
          .map((action: user.RegisterAction) => action.payload)
          .map(payload => {
            this.router.navigate(['/']);
            return {type: 'ROUTE_TO_HOME', payload: {}};
          });
  constructor(
      private actions$: Actions, private api: ApiService,
      public router: Router) {}
}
