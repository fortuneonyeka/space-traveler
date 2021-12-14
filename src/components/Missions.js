import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
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
      <Table>
        <thead>
          <tr>
            <th className="border-2">Mission</th>
            <th className="border-2">Description</th>
            <th className="border-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr className="border-2" key={mission.mission_id}>
              <td className="border-2">{mission.mission_name}</td>
              <td className="p-3">{mission.description}</td>
              <td className="align-middle">
                {' '}
                {mission.reserved ? (
                  <Badge bg="primary">Active Member</Badge>
                ) : (
                  <Button
                    className="inline-flex items-center px-2.5 py-1.5 border
    border-transparent text-xs font-medium rounded shadow-sm text-black
    bg-gray-400 w-36 h-10 hover:bg-gray-100"
                    bg="secondary"
                  >
                    NOT A MEMBER
                  </Button>
                )}
                {' '}
              </td>
              <td className="align-middle">
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
