import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as shedding from '../actions/shedding.actions';
import {ApiService} from '../api/api.service';
import * as fromRoot from '../reducers/index';

@Injectable()
export class SheddingEffects {
  @Effect()
  create$: Observable<Action> =
      this.actions$.ofType(shedding.ActionTypes.CREATE)
          .map((action: shedding.CreateAction) => action.payload)
          .switchMap(event => {
            return this.api.createEvent(event).map(
                payload => new shedding.CreateCompleteAction(payload));
          });
  constructor(
      private actions$: Actions, private api: ApiService,
      public store: Store<any>) {}
}
