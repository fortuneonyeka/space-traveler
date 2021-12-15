import missionsReducer, {
  loadMissions,
  joinMission,
  leaveMission,
} from '../redux/Missions/missions';


describe('Unit tests for missions', () => {
  jest.mock('../redux/missions/missions');
  let expectedOutputAction;
  const dispatchMock = (input) => {
    expectedOutputAction = input;
  };

  const LOAD = 'space-traveler/missions/LOAD';
  const SELECT = 'space-traveler/missions/SELECT';
  const LEAVE = 'space-traveler/missions/LEAVE';

  const actionLoadMock = {
    type: LOAD,
    state: [
      {
        mission_id: 'mission1',
        mission_name: 'mission1',
      },
    ],
  };
  describe('reducers', () => {
    it('returns the correct state for LOAD action', () => {
      expect(missionsReducer([], { type: LOAD, state: actionLoadMock })).toEqual(
        actionLoadMock
      );
    });
    it('returns the correct state for SELECT action', () => {
      const expectedSelectOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'mission1',
          reserved: true,
        },
      ];
      expect(
        missionsReducer(actionLoadMock.state, {
          type: SELECT,
          payload: 'mission1',
        })
      ).toEqual(expectedSelectOutputState);
    });
    it('returns the correct state for LEAVE action', () => {
      const expectedLeaveOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'mission1',
          reserved: false,
        },
      ];
      expect(
        missionsReducer(actionLoadMock.state, {
          type: LEAVE,
          payload: 'mission1',
        })
      ).toEqual(expectedLeaveOutputState);
    });
  });
  
});