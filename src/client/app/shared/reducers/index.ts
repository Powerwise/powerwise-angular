import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';
import {ActionReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {createSelector} from 'reselect';

import * as fromDevice from './device.reducer';
import * as fromResponse from './response.reducer';
import * as fromShedding from './shedding.reducer';
import * as fromUser from './user.reducer';

export interface State {
  user: fromUser.State;
  device: fromDevice.State;
  shedding: fromShedding.State;
  response: fromResponse.State;
}


const reducers = {
  user: fromUser.reducer,
  device: fromDevice.reducer,
  shedding: fromShedding.reducer,
  response: fromResponse.reducer
};
const developmentReducer: ActionReducer<State> = compose(
    localStorageSync(['user', 'device', 'shedding'], true),
    combineReducers)(reducers);

export function reducer(state: any, action: any) {
  return developmentReducer(state, action);
}


export const getUserState = (state: State) => state.user;

export const getAdmin = createSelector(getUserState, fromUser.getAdmin);
export const getUser = createSelector(getUserState, fromUser.getUser);
export const getUserRegistered =
    createSelector(getUserState, fromUser.getReistered);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);

export const getDeviceState = (state: State) => state.device;

export const getDeviceIds = createSelector(getDeviceState, fromDevice.getIds);
export const getDeviceEntities =
    createSelector(getDeviceState, fromDevice.getEntities);
export const getDeviceLoading =
    createSelector(getDeviceState, fromDevice.getLoading);
export const getDevices =
    createSelector(getDeviceEntities, getDeviceIds, (devices, registeredId) => {
      return registeredId.map(id => devices[id]);
    });
export const devicePotential = createSelector(getDevices, (devices) => {
  return devices.reduce((a, b) => a + b.killowats, 0);
});
export const userAndDevices =
    createSelector(getDevices, getUser, (devices, user) => {
      return {devices, user};
    });

export const getSheddingState = (state: State) => state.shedding;

export const getSheddingLoading =
    createSelector(getSheddingState, fromShedding.getLoading);
export const getSheddingEvent =
    createSelector(getSheddingState, fromShedding.getEvent);

// Response State

export const getResponseState = (state: State) => state.response;

export const getSelectedIds =
    createSelector(getResponseState, fromResponse.getSelected);

export const getSelectedDevcies = createSelector(
    getSelectedIds, getDeviceEntities, (selectedIds, devices) => {
      return selectedIds.map(id => devices[id]);
    });
export const getSelectedPotential =
    createSelector(getSelectedDevcies, (selected) => {
      return selected.reduce((a, b) => a + b.killowats, 0);
    });
