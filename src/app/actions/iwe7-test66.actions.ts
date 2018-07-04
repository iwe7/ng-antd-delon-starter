import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7Test66 } from '../models/iwe7-test66.model';

export enum Iwe7Test66ActionTypes {
  LoadIwe7Test66s = '[Iwe7Test66] Load Iwe7Test66s',
  AddIwe7Test66 = '[Iwe7Test66] Add Iwe7Test66',
  UpsertIwe7Test66 = '[Iwe7Test66] Upsert Iwe7Test66',
  AddIwe7Test66s = '[Iwe7Test66] Add Iwe7Test66s',
  UpsertIwe7Test66s = '[Iwe7Test66] Upsert Iwe7Test66s',
  UpdateIwe7Test66 = '[Iwe7Test66] Update Iwe7Test66',
  UpdateIwe7Test66s = '[Iwe7Test66] Update Iwe7Test66s',
  DeleteIwe7Test66 = '[Iwe7Test66] Delete Iwe7Test66',
  DeleteIwe7Test66s = '[Iwe7Test66] Delete Iwe7Test66s',
  ClearIwe7Test66s = '[Iwe7Test66] Clear Iwe7Test66s'
}

export class LoadIwe7Test66s implements Action {
  readonly type = Iwe7Test66ActionTypes.LoadIwe7Test66s;

  constructor(public payload: { iwe7Test66s: Iwe7Test66[] }) {}
}

export class AddIwe7Test66 implements Action {
  readonly type = Iwe7Test66ActionTypes.AddIwe7Test66;

  constructor(public payload: { iwe7Test66: Iwe7Test66 }) {}
}

export class UpsertIwe7Test66 implements Action {
  readonly type = Iwe7Test66ActionTypes.UpsertIwe7Test66;

  constructor(public payload: { iwe7Test66: Iwe7Test66 }) {}
}

export class AddIwe7Test66s implements Action {
  readonly type = Iwe7Test66ActionTypes.AddIwe7Test66s;

  constructor(public payload: { iwe7Test66s: Iwe7Test66[] }) {}
}

export class UpsertIwe7Test66s implements Action {
  readonly type = Iwe7Test66ActionTypes.UpsertIwe7Test66s;

  constructor(public payload: { iwe7Test66s: Iwe7Test66[] }) {}
}

export class UpdateIwe7Test66 implements Action {
  readonly type = Iwe7Test66ActionTypes.UpdateIwe7Test66;

  constructor(public payload: { iwe7Test66: Update<Iwe7Test66> }) {}
}

export class UpdateIwe7Test66s implements Action {
  readonly type = Iwe7Test66ActionTypes.UpdateIwe7Test66s;

  constructor(public payload: { iwe7Test66s: Update<Iwe7Test66>[] }) {}
}

export class DeleteIwe7Test66 implements Action {
  readonly type = Iwe7Test66ActionTypes.DeleteIwe7Test66;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7Test66s implements Action {
  readonly type = Iwe7Test66ActionTypes.DeleteIwe7Test66s;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearIwe7Test66s implements Action {
  readonly type = Iwe7Test66ActionTypes.ClearIwe7Test66s;
}

export type Iwe7Test66Actions =
 LoadIwe7Test66s
 | AddIwe7Test66
 | UpsertIwe7Test66
 | AddIwe7Test66s
 | UpsertIwe7Test66s
 | UpdateIwe7Test66
 | UpdateIwe7Test66s
 | DeleteIwe7Test66
 | DeleteIwe7Test66s
 | ClearIwe7Test66s;
