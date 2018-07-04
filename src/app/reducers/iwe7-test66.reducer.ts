import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7Test66 } from '../models/iwe7-test66.model';
import { Iwe7Test66Actions, Iwe7Test66ActionTypes } from '../actions/iwe7-test66.actions';

export interface State extends EntityState<Iwe7Test66> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Iwe7Test66> = createEntityAdapter<Iwe7Test66>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: Iwe7Test66Actions
): State {
  switch (action.type) {
    case Iwe7Test66ActionTypes.AddIwe7Test66: {
      return adapter.addOne(action.payload.iwe7Test66, state);
    }

    case Iwe7Test66ActionTypes.UpsertIwe7Test66: {
      return adapter.upsertOne(action.payload.iwe7Test66, state);
    }

    case Iwe7Test66ActionTypes.AddIwe7Test66s: {
      return adapter.addMany(action.payload.iwe7Test66s, state);
    }

    case Iwe7Test66ActionTypes.UpsertIwe7Test66s: {
      return adapter.upsertMany(action.payload.iwe7Test66s, state);
    }

    case Iwe7Test66ActionTypes.UpdateIwe7Test66: {
      return adapter.updateOne(action.payload.iwe7Test66, state);
    }

    case Iwe7Test66ActionTypes.UpdateIwe7Test66s: {
      return adapter.updateMany(action.payload.iwe7Test66s, state);
    }

    case Iwe7Test66ActionTypes.DeleteIwe7Test66: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7Test66ActionTypes.DeleteIwe7Test66s: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7Test66ActionTypes.LoadIwe7Test66s: {
      return adapter.addAll(action.payload.iwe7Test66s, state);
    }

    case Iwe7Test66ActionTypes.ClearIwe7Test66s: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
