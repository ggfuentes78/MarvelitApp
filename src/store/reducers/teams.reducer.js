import { TEAMS } from '../../../public/teams'

const initialState = {
    teams: TEAMS,
    selectedTeam: null,
    favTeam: [],
};

const TeamsReducer = (state= initialState, action) => {
    return state
};

export default TeamsReducer