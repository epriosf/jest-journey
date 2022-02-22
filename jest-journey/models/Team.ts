import { sequelize } from "../db/connection";
import Player from "./Player";
const Sequelize = require('sequelize');

const Team = sequelize.define('teams', {
    // Model attributes are defined here
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    team_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    points: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
    // Other model options go here
  });
  Team.hasMany(Player, {foreignKey: 'teamId', sourceKey: 'id'});
  Player.belongsTo(Team, {foreignKey: 'teamId', targetKey: 'id'})
  export default Team;