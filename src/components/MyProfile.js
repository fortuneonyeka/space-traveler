import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rocketReducer);
  return (
    <div className="w-full max-w-7xl flex flex-col items-center justify-start p-4">
      <div className="w-full grid grid-cols-2 gap-16">
        <div className="border w-full">
          <h1 className="w-full text-3xl text-center text-indigo-500 font-bold">Missions</h1>
          <ul>
            <li>Missionslist</li>
          </ul>
        </div>
        <div className="border w-full">
          <h1 className="w-full text-3xl text-center text-indigo-500 font-bold">Rockets</h1>
          <ul>
            {rocketList.filter((rocket) => rocket.reserved).map((rocket) => (
              <li className="text-xl" key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
