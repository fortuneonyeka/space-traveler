const URL = 'https://api.spacexdata.com/v3/missions';

// Actions
const LOAD = 'space-traveler/missions/LOAD';
const SELECT = 'space-traveler/missions/SELECT';
const LEAVE = 'space-traveler/missions/LEAVE';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.state;
    case SELECT: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case LEAVE: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

// Action creators
export const loadMissions = () => async (dispatch) => {
  const res = await fetch(URL);
  const data = await res.json();
  const state = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch({ type: LOAD, state });
};

export const joinMission = (payload) => ({
  type: SELECT,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE,
  payload,
});
