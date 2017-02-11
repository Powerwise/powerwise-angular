import {Action} from '@ngrx/store';
import {type} from '../util/index';

export const ActionTypes = {
  CREATE: type('[Sheding] Create'),
  CREATE_COMPLETE: type('[Shedding] Create Complete')
};

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: any) {}
}

export class CreateCompleteAction implements Action {
  type = ActionTypes.CREATE_COMPLETE;

  constructor(public payload: any) {}
}

export type Actions = CreateAction | CreateCompleteAction;
