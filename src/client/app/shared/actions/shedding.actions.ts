import {Action} from '@ngrx/store';
import {type} from '../util/index';

export const ActionTypes = {
  CREATE: type('[Sheding] Create'),
  CREATE_COMPLETE: type('[Shedding] Create Complete'),
  GET_DEVICES: type('[Shedding] Get Devices'),
  RECEIVE_DEVICES: type('[Shedding] Receive Devices')
};

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: any) {}
}

export class CreateCompleteAction implements Action {
  type = ActionTypes.CREATE_COMPLETE;

  constructor(public payload: any) {}
}
export class GetDevicesAction implements Action {
  type = ActionTypes.GET_DEVICES;

  constructor(public payload: any = {}) {}
}
export class ReceiveDevicesAction implements Action {
  type = ActionTypes.RECEIVE_DEVICES;

  constructor(public payload: any) {}
}
export type Actions = CreateAction | CreateCompleteAction;
