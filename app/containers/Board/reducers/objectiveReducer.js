import { Map } from 'immutable';
import { SET_OBJECTIVE } from '../actions';

export const initialObjectiveState = Map({
  objetive: 0,
});

const setObjective = objectiveData =>
  Map({
    objective: objectiveData,
  });

export default function objectiveReducer(state = initialObjectiveState, action) {
  switch (action.type) {
    case SET_OBJECTIVE: {
      return setObjective(action.data);
    }
    default:
      return state;
  }
}
