import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import { joinMission, leaveMission } from '../redux/Missions/missions';

const JoinLeaveButton = ({ reserved, id }) => {
  const dispatch = useDispatch();
  const addMissionToStore = (e) => {
    e.preventDefault();

    dispatch(joinMission(id));
  };

  const leaveMissionToStore = (e) => {
    e.preventDefault();

    dispatch(leaveMission(id));
  };

  if (reserved === true) {
    return (
      <Button
        className="inline-flex items-center px-2.5 py-1.5 border
    border-red-600 text-xs font-medium rounded shadow-sm text-red-500
    bg-white-200 w-36 h-10 hover:bg-indigo-300 h-15"
        onClick={leaveMissionToStore}
      >
        Leave Mission
      </Button>
    );
  }
  return (
    <Button
      className="inline-flex items-center px-2.5 py-1.5 border
    border-transparent text-xs font-medium rounded shadow-sm text-black
    bg-gray-200 w-36 h-10 hover:bg-green-300"
      onClick={addMissionToStore}
    >
      Join Mission
    </Button>
  );
};

JoinLeaveButton.propTypes = {
  reserved: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  id: PropTypes.string,
};

JoinLeaveButton.defaultProps = {
  reserved: PropTypes.bool,
  id: PropTypes.string,
};

export default JoinLeaveButton;
