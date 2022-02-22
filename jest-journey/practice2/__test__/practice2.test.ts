import { getChampion, getWhoLossCategory } from "../functions";
import { Team } from "../interfaces";

// sequelize libreria para interactuar con la bdd
// ORM object relational mapping

// reglas de normalizacion
// empleado: nombre, apellido, departamento_id - deparmento_nombre
// departament: id, nombre

// instalar sequelize 
// instalar docker en tu computadora
// correr postgres como imagen de docker en tu computadora
// correr postgres "" usando docker-compose
/*const team = {
    teams: [
        {
            name: 'Liverpool',
            points: 54,
            players: ['LA', 'LB', 'LC']
        }, 
        {
            name: 'Man City',
            points: 45,
            players: ['MCA', 'MCB', 'MCC']
        },
        {
            name: 'Man United',
            points: 67,
            players: ['MUA', 'MUB', 'MUC']
        },
        {
            name: 'Chelsea',
            points: 31,
            players: ['CA', 'CB', 'CC']
        },
        {
            name: 'Arsenal',
            points: 28,
            players: ['AA', 'AB', 'AC']
        }
    ]
}
test("Given an array of objects with soccer teams, get the team with the most point", () => {
    // setup
    const soccerTeams = team.teams;
    // ejecute
    const champion: Team = getChampion(soccerTeams);
    // validation
    expect(champion).toEqual({
        name: 'Man United',
        points: 67,
        players: ['MUA', 'MUB', 'MUC']
    })
})
test("Given an array of objects with soccer teams, get 2 teams with the less points", () => {
    // setup
    const soccerTeams = team.teams;
    // ejecute
    const champion = getWhoLossCategory(soccerTeams);
    // validation
    expect(champion).toEqual([
        {
            name: 'Arsenal',
            points: 28,
            players: ['AA', 'AB', 'AC']
        },
        {
            name: 'Chelsea',
            points: 31,
            players: ['CA', 'CB', 'CC']
        }
    ])
})
*/
