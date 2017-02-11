import {Action} from '@ngrx/store';
import {type} from '../util/index';

export const ActionTypes = {
  ADD: type('[Device] Add'),
  REMOVE: type('[Device] Remove'),
  SAVE: type('[Device] Save'),
  SAVE_COMPLETE: type('[Device] Save Complete'),
};

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: any) {}
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: any) {}
}
export class SaveAction implements Action {
  type = ActionTypes.SAVE;

  constructor() {}
}
export class SaveCompleteAction implements Action {
  type = ActionTypes.SAVE_COMPLETE;

  constructor(public payload: any) {}
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
    AddAction | RemoveAction | SaveCompleteAction | SaveAction;
