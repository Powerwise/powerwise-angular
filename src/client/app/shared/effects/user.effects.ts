import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {empty} from 'rxjs/observable/empty';
import {of } from 'rxjs/observable/of';

import * as user from '../actions/user.actions';
import {ApiService} from '../api/api.service';

@Injectable()
export class UserEffects {
  @Effect()
  register$: Observable<Action> =
      this.actions$.ofType(user.ActionTypes.REGISTER)
          .map((action: user.RegisterAction) => action.payload)
          .switchMap(payload => {
            return this.api.register(payload).map(
                user => new user.RegisterCompleteAction(user));
          });
  constructor(private actions$: Actions, private api: ApiService) {}
}
