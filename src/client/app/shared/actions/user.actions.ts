import {Action} from '@ngrx/store';
import {type} from '../util/index';

export const ActionTypes = {
  REGISTER: type('[User] Register'),
  REGISTER_COMPLETE: type('[User] Register Complete'),
  LOAD: type('[User] Load'),
};

export class RegisterAction implements Action {
  type = ActionTypes.REGISTER;

  constructor(public payload: any) {}
}

export class RegisterCompleteAction implements Action {
  type = ActionTypes.REGISTER_COMPLETE;

  constructor(public payload: any) {}
}

export type Actions = RegisterAction | RegisterCompleteAction;
