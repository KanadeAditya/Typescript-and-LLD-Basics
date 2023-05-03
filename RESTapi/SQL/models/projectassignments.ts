'use strict';
import { Model } from "sequelize";
module.exports = (sequelize : any, DataTypes:any) => {
  class ProjectAssignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  ProjectAssignments.init({
    ProjectId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      references:{
        model:'Projects',
        key:'id'
      }
    },
    UserId: {
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
      references:{
        model : 'Users',
        key : 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ProjectAssignments',
  });
  return ProjectAssignments;
};