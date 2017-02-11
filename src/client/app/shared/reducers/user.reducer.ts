import {Action, ActionReducer} from '@ngrx/store';
import * as user from '../actions/user.actions';

export interface State {
  registered: boolean;
  loading: boolean;
  user: any;
  admin: boolean;
}
;

export const initialState: State = {
  registered: false,
  loading: false,
  user: {},
  admin: false
};
export function reducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case user.ActionTypes.REGISTER: {
      return Object.assign({}, state, {loading: true});
    }
    case user.ActionTypes.REGISTER_COMPLETE: {
      return Object.assign(
          {}, state, {loading: false, user: action.payload, registered: true});
    }
    default:
      return state;
  }
}
export const getAdmin = (state: State) => state.admin;

export const getUser = (state: State) => state.user;

export const getLoading = (state: State) => state.loading;

export const getReistered = (state: State) => state.registered;
