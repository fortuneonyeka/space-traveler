import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync } from '../redux/Rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    if (rocketList.length === 0) dispatch(fetchRocketsAsync());
  }, []);
  return (
    <div className="w-full max-w-7xl flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-8 mb-16">Travel in one of our amazing Rockets</h1>
      <ul className="w-full space-y-8">
        {rocketList.map((rocket) => (
          <li className="flex space-x-8 shadow" key={rocket.id}>
            <img src={rocket.img} alt="rocket" className="h-48 w-60" />
            <div className="flex flex-col justify-between pb-4 items-start">
              <h2 className="text-3xl font-bold">{rocket.name}</h2>
              <span>
                { rocket.reserved }
                Lorem, ipsum dolor sit
                amet consectetur adipisicing elit.
                Labore accusantium corporis quasi quo in voluptatem nisi.
                Rerum ipsam eius error.
                Lorem, ipsum dolor sit
                amet consectetur adipisicing elit.
                Labore accusantium corporis quasi quo in voluptatem nisi.
                Rerum ipsam eius error.
                Lorem, ipsum dolor sit
                amet consectetur adipisicing elit.
                Labore accusantium
              </span>
              <p>
                Type:
                {' '}
                {rocket.type}
              </p>
              <button className="border rounded-lg px-4 py-1 hover:bg-gray-50" type="button">Reserve</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
