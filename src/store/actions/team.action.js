export const SELECTED_TEAM = "SELECTED_TEAM";

export const selectedTeam = id =>({
    type: SELECTED_TEAM,
    teamId: id,
});