// Laget av Markus Moen Magnussen

import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

/**
 * user schema deprecated
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {timestamps: boolean}, {password: {min: number, type: StringConstructor, required: boolean}, img: {type: StringConstructor}, isAdmin: {default: boolean, type: BooleanConstructor}, email: {max: number, unique: boolean, type: StringConstructor, required: boolean}, username: {min: number, max: number, unique: boolean, type: StringConstructor, required: boolean}}, HydratedDocument<FlatRecord<{password: {min: number, type: StringConstructor, required: boolean}, img: {type: StringConstructor}, isAdmin: {default: boolean, type: BooleanConstructor}, email: {max: number, unique: boolean, type: StringConstructor, required: boolean}, username: {min: number, max: number, unique: boolean, type: StringConstructor, required: boolean}}>, {}>>}
 */
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, 
{timestamps: true}
);

//TODO: refactor to menySchema

const menuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, 
{timestamps: true}
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Menu = mongoose.models.Menu || mongoose.model('Menu', menuSchema);