const initialState = [];

const LOAD = 'space-traveler/missions/LOAD';
// const RESERVE = 'space-traveler/missions/RESERVE';
// const CANCEL = 'space-traveler/missions/CANCEL';
export const loadMissions = () => ({ type: LOAD });
export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return state;
    default: return state;
  }
}
