import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';
import {ActionReducer} from '@ngrx/store';
import {createSelector} from 'reselect';

import * as fromUser from './user.reducer';


export interface State { user: fromUser.State; }

const reducers = {
  user: fromUser.reducer
};
const developmentReducer: ActionReducer<State> =
    compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
  return developmentReducer(state, action);
}


export const getUserState = (state: State) => state.user;

export const getAdmin = createSelector(getUserState, fromUser.getAdmin);
export const getUser = createSelector(getUserState, fromUser.getUser);
export const getRegistered =
    createSelector(getUserState, fromUser.getReistered);
export const getLoading = createSelector(getUserState, fromUser.getLoading);
