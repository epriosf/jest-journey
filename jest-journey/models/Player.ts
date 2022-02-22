import { sequelize } from "../db/connection";

const Sequelize = require('sequelize');
const Player = sequelize.define('players', {
    // Model attributes are defined here
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    player_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    goals: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    teamId:{
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {

    timestamps: false
    // Other model options go here
  });
  export default Player;