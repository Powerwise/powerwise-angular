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
      return Object.assign({}, state, {
        ids: [...state.ids, id],
        entities: Object.assign({}, state.entities, {[id]: payload})
      });
    }
    case device.ActionTypes.SAVE: {
      return Object.assign({}, state, {loading: true});
    }
    case device.ActionTypes.SAVE_COMPLETE: {
      return Object.assign({}, state, {loading: false});
    }
    case device.ActionTypes.REMOVE: {
      return Object.assign({}, state, {loading: false});
    }
    case device.ActionTypes.BULK_ADD: {
      let entities = action.payload.reduce((a: any, b: any) => {
        a[b.id] = b;
        return a;
      }, {});
      let ids = action.payload.map(({id}: any) => id);
      return Object.assign({}, state, {loading: false, ids, entities});
    }
    default:
      return state;
  }
}
export const getEntities = (state: State) => state.entities;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
