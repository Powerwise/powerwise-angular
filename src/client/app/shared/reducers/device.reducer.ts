import {Action, ActionReducer} from '@ngrx/store';
import {append, assoc, assocPath} from 'ramda';

import * as device from '../actions/device.actions';

export interface State {
  loading: boolean;
  entities: any;
  ids: string[];
}
;

export const initialState: State = {
  loading: false,
  entities: {
    DEMO_ID:
        {id: 'DEMO_ID', name: 'Demo Item', type: 'FRIDGE', killowats: 100}
  },
  ids: ['DEMO_ID']
};
export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case device.ActionTypes.ADD: {
      let {payload} = action;
      let {id} = payload;
      let _state: any =
          assoc('ids', append(action.payload.id, state.ids), state);
      _state = assocPath(['entities', id], payload, _state);
      return _state;
    }
    case device.ActionTypes.SAVE: {
      return assoc('loading', true, state);
    }
    case device.ActionTypes.SAVE_COMPLETE: {
      return assoc('loading', false, state);
    }
    case device.ActionTypes.REMOVE: {
      return Object.assign(state, {loading: false, user: action.payload});
    }
    default:
      return state;
  }
}
export const getEntities = (state: State) => state.entities;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
