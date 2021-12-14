import axios from 'axios';

const FETCH = 'space-traveler/rockets/FETCH';
const RESERVE = 'space-traveler/rockets/RESERVE';
const CANCEL_RESERVE = 'space-traveler/rockets/CANCEL_RESERVE';
const URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = (toPurge) => {
  const payload = toPurge.map((el) => (
    {
      id: el.id,
      name: el.rocket_name,
      type: el.rocket_type,
      img: el.flickr_images[0],
      reserved: false,
      description: el.description,
    }
  ));
  return ({
    type: FETCH,
    payload,
  });
};

export const fetchRocketsAsync = () => (function caller(dispatch) {
  axios.get(URL).then((response) => {
    dispatch(fetchRockets(response.data));
  });
});

export const reserveRocket = (payload) => ({
  type: RESERVE,
  payload,
});

export const cancelReservedRocket = (payload) => ({
  type: CANCEL_RESERVE,
  payload,
});

const rocketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH:
      return payload;
    case RESERVE: {
      const newState = state.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVE: {
      const newState = state.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketReducer;
