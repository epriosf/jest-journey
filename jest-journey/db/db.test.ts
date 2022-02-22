import {sequelize} from '../db/connection';
import Team from '../models/Team';
import Player from '../models/Player';
import { Op } from 'sequelize';
/*test('Verify database connection', async()=>{
    //Setup
    // Execute
    const response= await sequelize;
    //Validation
    expect(response.config.database).toBe('teamsDB')
})
test('Verify data from database', async()=>{
    //Setup
    const team1= Team;
    // Execute
    const response= await Team.findAll({
        where: {
          id: 1,
        }
      });
    //Validation
    // @ts-ignore
    expect(response[0]['dataValues']).toEqual({"id": 1, "points": 54, "team_name": "Liverpool"});
})
test('Verify all data from DataBase', async()=>{
  // Execute
  const response= await Team.findAll({
    raw: true
  });
  // @ts-ignore
  console.log('respuesta:', response);
  //Validation
  // @ts-ignore
  expect(response).toEqual(
    [
      {
        id: 1,
        team_name: 'Liverpool',
        points: 54
      },
      {
        id: 2,
        team_name: 'Man City',
        points: 45
      },
      {
        id: 3,
        team_name: 'Man United',
        points: 67
      },
      {
        id: 4,
        team_name: 'Chelsea',
        points: 31
      },
      {
        id: 5,
        team_name: 'Arsenal',
        points: 28
      }
    ]
    );
})

test('Insert Data in Database', async()=>{
    //Setup
    const team1= Team;
    const id= 6;
    const name= 'Barcelonay8';
    const points= 99;
    // Execute
    const response= await team1.create({id: id, team_name: name, points: points});
    //Validation
    // @ts-ignore
    expect(response[0]['dataValues']).toEqual({"id": id, "team_name": name, "points": points});
});

test('Insert Data in Database', async()=>{
  //Setup
  const team1= Team;
  const id= 6;
  const name= 'Barcelonay8';
  const points= 99;
  // Execute
  const response= await team1.create({id: id, team_name: name, points: points});
  //Validation
  // @ts-ignore
  expect(response[0]['dataValues']).toEqual({"id": id, "team_name": name, "points": points});
});

test('A player that belongs to a Team', async()=>{
  //Setup
  
  //Validation
  const response= await Player.findOne({
    include: [
      {
        model: Team,
        attributes: ['team_name']
      }
    ],
    where: {
      player_name: 'MUB'
    },
    attributes: ['player_name', 'goals']
  })
  // @ts-ignore
  expect(response).toEqual({player_name: 'MUB', goals: 87, team_name: 'Man United'});
});
test('Maximum player scorer and the team that belongs to', async()=>{
  //Setup
  
  //Validation
  const response= await Player.findOne({
    include: {
      model: Team,
      attributes: ['team_name']
    },
    where:{
      goals: {
        [Op.in]:[
        sequelize.literal('select MAX(goals) from players')]}
    },
    attributes: ['player_name', 'goals']
  });
  // @ts-ignore
  const x={player_name: response!['dataValues']['player_name'], goals: response!['dataValues']['goals'], team: response!['dataValues']['team']['dataValues']}
  // @ts-ignore
  expect(x).toEqual({player_name: 'MUB', goals: 87, team:{team_name: 'Man United'}});
});
*/

