import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissions } from '../redux/Missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (missions.length === 0) dispatch(loadMissions());
    return () => null;
  }, []);
  return (
    <div className="w-full max-w-7xl flex flex-col items-center">
      <ul className="w-full space-y-5">
        {missions.map((mission) => (
          <li className="flex" key={mission.mission_id}>
            <div>
              <h1>Mission:</h1>
              <h2>{mission.mission_name}</h2>
              <p>Description:</p>
              <p>{mission.description}</p>
              <p>Status:</p>
              <span className="space-x-5">Not a Member</span>
              <button
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border
    border-transparent text-xs font-medium rounded shadow-sm text-white
    bg-indigo-600 hover:bg-indigo-700"
              >
                Join Mission
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
