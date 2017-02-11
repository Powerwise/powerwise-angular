import {Action, ActionReducer} from '@ngrx/store';

export const REGISTER = 'REGISTER';
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER';

export interface State {
  registered: boolean;
  loading: boolean;
  user: any;
  admin: boolean;
}
;

export const initialState = {
  registered: false,
  loading: false,
  user: {},
  admin: false
};
export function reducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case REGISTER: {
      return Object.assign(state, {loading: true});
    }
    case RECEIVE_REGISTER: {
      return Object.assign(state, {loading: false, user: action.payload});
    }
    default:
      return state;
  }
}
export const getAdmin = (state: State) => state.admin;

export const getUser = (state: State) => state.user;

export const getLoading = (state: State) => state.loading;

export const getReistered = (state: State) => state.registered;
