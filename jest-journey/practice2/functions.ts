import { Score, Team } from "./interfaces";

export const getChampion = (soccerTeams: Array<Team>): Team => {
    let winner: Team = soccerTeams[0];
    let maxPointAcumulator = 0;
    soccerTeams.forEach((team: Team) => {
        if (team.points > maxPointAcumulator) {
            maxPointAcumulator = team.points;
            winner = team;
        }
    })
    return winner;
}

export const getWhoLossCategory = (soccerTeams: Array<Team>) => {
    let points: Array<Score> = [];
    soccerTeams.filter((team: Team, id: number) => {
        points.push({ points: team.points, id })
    })
    points.sort((a: Score, b: Score) => a.points - b.points)
    return [soccerTeams[points[0].id], soccerTeams[points[1].id]];
}
