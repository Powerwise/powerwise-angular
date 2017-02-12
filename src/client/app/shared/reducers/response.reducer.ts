import {Action, ActionReducer} from '@ngrx/store';

import * as resp from '../actions/response.actions';

export interface State {
  eventId: string;
  loading: boolean;
  selected: string[];
  responses: {[key: string]: any};
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
      return Object.assign({}, state, {eventId: action.payload});
    }
    case resp.ActionTypes.ADD: {
      return Object.assign(
          {}, state, {selected: [action.payload, ...state.selected]});
    }
    case resp.ActionTypes.REMOVE: {
      let filtered =
          state.selected.filter((id: string) => id !== action.payload);
      return Object.assign({}, state, {selected: filtered});
    }
    case resp.ActionTypes.SUBMIT: {
      return Object.assign({}, state, {loading: true});
    }
    case resp.ActionTypes.SUBMIT_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        responses:
            Object.assign({}, state, {[state.eventId]: state.selected})
      });
    }
    default:
      return state;
  }
}
export const getSelected = (state: State) => state.selected;
export const getEventId = (state: State) => state.eventId;
export const getLoading = (state: State) => state.loading;
export const getResponses = (state: State) => state.responses;
