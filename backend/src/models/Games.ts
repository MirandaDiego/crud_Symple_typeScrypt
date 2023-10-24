import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";


export interface GamesInstance extends Model {
    id: number;
    name: string;
    cost: string;
    category: string;
    photo: string;
}

export const Games = sequelize.define<GamesInstance>('Games', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo:{
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});
