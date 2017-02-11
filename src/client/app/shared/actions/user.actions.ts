import {Action} from '@ngrx/store';
import {type} from '../util/index';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  REGISTER: type('[User] Register'),
  REGISTER_COMPLETE: type('[User] Register Complete'),
  LOAD: type('[User] Load'),
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions:
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class RegisterAction implements Action {
  type = ActionTypes.REGISTER;

  constructor(public payload: any) {}
}

export class RegisterCompleteAction implements Action {
  type = ActionTypes.REGISTER_COMPLETE;

  constructor(public payload: any) {}
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = RegisterAction | RegisterCompleteAction;
