import {Action, ActionReducer} from '@ngrx/store';
import * as R from 'ramda';

import * as resp from '../actions/response.actions';

export interface State {
  eventId: string;
  loading: boolean;
  selected: string[];
  responses: {[key: string]: any}
}
;

export const initialState: State = {
  loading: false,
  eventId: '',
  responses: {

  },
  selected: []
};
export function reducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case resp.ActionTypes.SELECT_EVENT: {
      return R.assoc('eventId', action.payload, state);
    }
    case resp.ActionTypes.ADD: {
      return R.assoc('selected', [action.payload, ...state.selected], state);
      ;
    }
    case resp.ActionTypes.REMOVE: {
      return R.assoc(
          'selected', R.filter(n => n !== action.payload, state.selected),
          state);
    }
    case resp.ActionTypes.SUBMIT: {
      return R.assoc('loading', true, state);
    }
    case resp.ActionTypes.SUBMIT_SUCCESS: {
      state = R.assoc('loading', false, state);
      return R.assocPath(['responses', state.eventId], state.selected, state);
    }
    default:
      return state;
  }
}
export const getSelected = (state: State) => state.selected;
export const getEventId = (state: State) => state.eventId;
export const getLoading = (state: State) => state.loading;
export const getResponses = (state: State) => state.responses;
