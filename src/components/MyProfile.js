import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import rocketIcon from '../assets/icon-rocket.svg';

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rocketReducer);
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div className="w-full max-w-7xl flex flex-col items-center justify-start p-4">
      <div className="w-full grid grid-cols-2 gap-8">
        <div className="w-full">
          <Container>
            <Card className="space-y-8">
              <Card.Header className="w-full text-3xl text-center text-indigo-500 font-bold">
                Reserved Missions
              </Card.Header>
              {missions
                .filter((mission) => mission.reserved === true)
                .map((filteredMission) => (
                  <ListGroup key={filteredMission.mission_id}>
                    <ListGroup.Item className="text-xl border uppercase font-semibold bg-gray-100 p-4 grid grid-cols-3 items-center justify-items-center">
                      {filteredMission.mission_name}
                    </ListGroup.Item>
                  </ListGroup>
                ))}
            </Card>
          </Container>
        </div>
        <div className="w-full">
          <h1 className="w-full text-3xl text-center text-indigo-500 font-bold">
            {' '}
            Reserved Rockets
          </h1>
          <ul className="space-y-8 py-8">
            {rocketList.filter((rocket) => rocket.reserved).length === 0 ? (
              <h2 className="text-2xl font-semibold text-center">
                You haven&apos;t Reserved any rocket yet!
              </h2>
            ) : (
              ''
            )}
            {rocketList
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <li
                  className="text-xl bg-gray-100 p-4 grid grid-cols-3 items-center justify-items-center"
                  key={rocket.id}
                >
                  <span className="text-xl uppercase font-semibold">
                    {rocket.name}
                  </span>
                  <img src={rocketIcon} alt="rocket icon" />
                  <div className="relative rounded-full group">
                    <img
                      className="w-6 h-6"
                      src="https://img.icons8.com/material-outlined/50/000000/info.png"
                      alt="more info"
                    />
                    <span className="absolute w-80 hidden group-hover:block bg-indigo-100 z-20 p-4 border border-indigo-600 rounded-lg right-8 -top-20 text-sm font-bold">
                      {rocket.description}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
