import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { loadMissions } from '../redux/Missions/missions';
import JoinLeaveButton from './JoinLeaveButton';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (missions.length === 0) dispatch(loadMissions());
    return () => null;
  }, []);
  return (
    <Container>
      <Table striped bordered hover>
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
    bg-gray-400 w-36 hover:bg-gray-50"
                >
                  Not a Member
                </Button>
                {' '}
              </td>
              <td>
                <JoinLeaveButton
                  reserved={mission.reserved}
                  id={mission.mission_id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
