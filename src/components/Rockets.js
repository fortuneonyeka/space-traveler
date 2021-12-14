import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync } from '../redux/Rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    if(rocketList.length === 0) dispatch(fetchRocketsAsync()); //eslint-disable-line
  }, []);
  return (
    <div className="w-full max-w-7xl flex flex-col items-center">
      <h1>Hello rockets</h1>
      <ul className="w-full space-y-4">
        {rocketList.map((rocket) => (
          <li className="flex" key={rocket.id}>
            <img src={rocket.img} alt="rocket" className="h-48 w-60" />
            <div>
              <h2>{rocket.name}</h2>
              <span>{rocket.reserved}</span>
              <p>{rocket.type}</p>
              <button type="button">Reserve</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
