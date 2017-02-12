import {Action, ActionReducer} from '@ngrx/store';
import * as R from 'ramda';

import * as device from '../actions/device.actions';

export interface State {
  loading: boolean;
  entities: any;
  ids: string[];
}
;

export const initialState: State = {
  loading: false,
  entities: {},
  ids: []
};
export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case device.ActionTypes.ADD: {
      let {payload} = action;
      let {id} = payload;
      let _state: any =
          R.assoc('ids', R.append(action.payload.id, state.ids), state);
      _state = R.assocPath(['entities', id], payload, _state);
      return _state;
    }
    case device.ActionTypes.SAVE: {
      return R.assoc('loading', true, state);
    }
    case device.ActionTypes.SAVE_COMPLETE: {
      return R.assoc('loading', false, state);
    }
    case device.ActionTypes.REMOVE: {
      return Object.assign({}, state, {loading: false, user: action.payload});
    }
    default:
      return state;
  }
}
export const getEntities = (state: State) => state.entities;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
