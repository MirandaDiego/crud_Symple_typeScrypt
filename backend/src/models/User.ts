import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserInstance extends Model {
    id:number;
    name:string;
    email:string;
    password:string;

}

export const User = sequelize.define<UserInstance>('Users', {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false
});

/*(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();*/