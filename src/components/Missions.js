import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { loadMissions } from '../redux/Missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (missions.length === 0) dispatch(loadMissions());
    return () => null;
  }, []);
  return (
    <Container className="w-full max-w-7xl flex flex-col items-center">
      <Table className="stripe-5 border-2 space-y-4 tems-center">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {' '}
                <Button
                  className="inline-flex items-center px-2.5 py-1.5 border
    border-transparent text-xs font-medium rounded shadow-sm text-black
    bg-gray-500 w-50"
                >
                  Not a Member
                </Button>
                {' '}
              </td>
              <td>
                <Button
                  className="inline-flex items-center px-2.5 py-1.5 border
    border-transparent text-xs font-medium rounded shadow-sm text-black
    bg-gray-200 hover:bg-indigo-700 w-50"
                >
                  Join Mission
                </Button>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
