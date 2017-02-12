import {Action, ActionReducer} from '@ngrx/store';
import * as shedding from '../actions/shedding.actions';

export interface State {
  loading: boolean;
  event: any;
  devices: any[];
}
;

export const initialState: State = {
  loading: false,
  event: {},
  devices: []
};
export function reducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case shedding.ActionTypes.CREATE: {
      return Object.assign({}, state, {loading: true});
    }
    case shedding.ActionTypes.CREATE_COMPLETE: {
      return Object.assign({}, state, {loading: false, event: action.payload});
    }
    case shedding.ActionTypes.GET_DEVICES: {
      return Object.assign({}, state, {loading: true});
    }
    case shedding.ActionTypes.RECEIVE_DEVICES: {
      return Object.assign(
          {}, state, {loading: false, devices: action.payload});
    }
    default:
      return state;
  }
}
export const getEvent = (state: State) => state.event;

export const getLoading = (state: State) => state.loading;

export const getDevices = (state: State) => state.devices;
