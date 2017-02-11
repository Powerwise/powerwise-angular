import {Action} from '@ngrx/store';
import {type} from '../util/index';

export const ActionTypes = {
  ADD: type('[Response] Select'),
  REMOVE: type('[Response] Remove'),
  SELECT_EVENT: type('[Response] Select Event'),
  SUBMIT: type('[Response] Submit'),
  SUBMIT_SUCCESS: type('[Response] Submit Success')
};

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: string) {}
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: string) {}
}
export class SubmitAction implements Action {
  type = ActionTypes.SUBMIT;

  constructor(public payload: any = {}) {}
}
export class SelectEventAction implements Action {
  type = ActionTypes.SELECT_EVENT;

  constructor(public payload: string) {}
}
export class SubmitSuccessAction implements Action {
  type = ActionTypes.SUBMIT_SUCCESS;

  constructor(public payload: any = {}) {}
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = AddAction | RemoveAction;
