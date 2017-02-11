import {Action} from '@ngrx/store';
import {type} from '../util/index';

export const ActionTypes = {
  ADD: type('[Response] Select'),
  REMOVE: type('[Response] Remove'),
  // SUBMIT: type('[Response] Submit'),
  // SUBMIT_SUCCESS: type('[Response] Submit Success')
};

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: string) {}
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: string) {}
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = AddAction | RemoveAction;
