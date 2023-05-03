'use strict';
import  {Model, UUID, UUIDV4} from 'sequelize'

interface UserAttributes {
  id : string 
  name : string;
  email : string
  password : string
}

module.exports = (sequelize : any, DataTypes : any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id !: string 
    name !: string;
    email !: string
    password !: string
      
    static associate(models : any) {
      // define association here
      User.belongsToMany(models.Project,{
        through : 'ProjectAssignments'
      })
    }
  }
  User.init({
    id:{type : DataTypes.UUID , allowNull: false , defaultValue:UUIDV4 ,primaryKey : true},
    name: {
      type :DataTypes.STRING , 
      allowNull:false
    },
    password: {
      type :DataTypes.STRING , 
      allowNull:false
    },
    email: {
      type :DataTypes.STRING , 
      unique : true, 
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};