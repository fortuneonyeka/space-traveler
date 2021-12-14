import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync, reserveRocket, cancelReservedRocket } from '../redux/Rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    if (rocketList.length === 0) dispatch(fetchRocketsAsync());
  }, []);
  const reserveIt = (id) => {
    dispatch(reserveRocket(id));
  };
  const cancelIt = (id) => {
    dispatch(cancelReservedRocket(id));
  };
  return (
    <div className="w-full max-w-7xl flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-8 mb-16">Travel in one of our amazing Rockets</h1>
      <ul className="w-full space-y-8">
        {rocketList.map((rocket) => (
          <li className="flex shadow" key={rocket.id}>
            <div className="relative overflow-hidden w-96">
              <img src={rocket.img} alt="rocket" className="" />
              {(rocket.reserved) ? (
                <span
                  className="px-8 py-1 bg-yellow-400 font-bold absolute top-4 -right-8 transform rotate-45"
                >
                  Reserved
                </span>
              ) : '' }
            </div>
            <div className="flex flex-col justify-between pb-4 items-start w-3/5 px-8">
              <h2 className="text-3xl font-bold">{rocket.name}</h2>
              <span className="trext-sm tracking-tight leading-tight">
                {rocket.description}
              </span>
              <p>
                Type:
                {' '}
                {rocket.type}
              </p>
              {(rocket.reserved) ? (
                <button
                  onClick={() => cancelIt(rocket.id)}
                  className="border border-indigo-400 text-indigo-600 bg-gray-100 rounded-lg px-6 py-2 hover:bg-white"
                  type="button"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={() => reserveIt(rocket.id)}
                  className="border border-indigo-400 text-indigo-600 bg-gray-100 rounded-lg px-6 py-2 hover:bg-white"
                  type="button"
                >
                  Reserve
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
