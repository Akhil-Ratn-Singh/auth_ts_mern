import mongoose from "mongoose";

export interface IUser{
    username:string;
    email:string;
    password:string
}

export interface MongoDocument extends IUser,mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
    _doc?:any
}