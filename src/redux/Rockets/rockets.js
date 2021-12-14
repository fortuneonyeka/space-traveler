import axios from 'axios';

const FETCH = 'space-traveler/rockets/FETCH';
const URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = (toPurge) => {
  const payload = toPurge.map((el) => (
    {
      id: el.id,
      name: el.rocket_name,
      type: el.rocket_type,
      img: el.flickr_images[0],
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

const rocketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH:
      return payload;
    default:
      return state;
  }
};

export default rocketReducer;
