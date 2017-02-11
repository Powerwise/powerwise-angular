import {Action, ActionReducer} from '@ngrx/store';
import {append, assoc, filter} from 'ramda';

import * as resp from '../actions/response.actions';

export interface State {
  eventId: string;
  loading: boolean;
  selected: string[];
}
;

export const initialState: State = {
  loading: false,
  eventId: '',
  selected: []
};
export function reducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case resp.ActionTypes.ADD: {
      return assoc('selected', [action.payload, ...state.selected], state);
      ;
    }
    case resp.ActionTypes.REMOVE: {
      return assoc(
          'selected', filter(n => n !== action.payload, state.selected), state);
    }
    default:
      return state;
  }
}
export const getSelected = (state: State) => state.selected;
