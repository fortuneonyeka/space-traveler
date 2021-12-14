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
    <Container className="mt-9 mb-9">
      <Table>
        <thead>
          <tr className="border-2 h-12">
            <th className="border-2">Mission</th>
            <th className="border-2">Description</th>
            <th className="border-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr className="border-2" key={mission.mission_id}>
              <td className="border-2 w-40 p-8">{mission.mission_name}</td>
              <td className="p-4 w-1/2">{mission.description}</td>
              <td className="border-2 w-20 p-8">
                {' '}
                {mission.reserved ? (
                  <Badge>Active Member</Badge>
                ) : (
                  <Button
                    className="inline-flex justify-center items-center px-2.5 py-1.5 border
    border-transparent text-xs font-medium rounded shadow-sm text-black
    bg-gray-400 w-30 h-10 hover:bg-gray-100"
                  >
                    NOT A MEMBER
                  </Button>
                )}
                {' '}
              </td>
              <td className="align-middle w-20 px-8">
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
