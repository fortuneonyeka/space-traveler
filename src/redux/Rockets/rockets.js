const FETCH = 'space-traveler/rockets/FETCH';

const rocketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH:
      return payload;
    default:
      return state;
  }
};

export default rocketReducer;
