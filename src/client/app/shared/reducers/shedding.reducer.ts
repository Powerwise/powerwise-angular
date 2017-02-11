import {Action, ActionReducer} from '@ngrx/store';
import * as shedding from '../actions/shedding.actions';

export interface State {
  loading: boolean;
  event: any;
}
;

export const initialState: State = {
  loading: false,
  event: {}
};
export function reducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case shedding.ActionTypes.CREATE: {
      return Object.assign({}, state, {loading: true});
    }
    case shedding.ActionTypes.CREATE_COMPLETE: {
      return Object.assign({}, state, {loading: false, event: action.payload});
    }
    default:
      return state;
  }
}
export const getEvent = (state: State) => state.event;

export const getLoading = (state: State) => state.loading;
