import { Document } from "mongoose";

export interface UserDocument extends Document {
    _id: string;
    username: string;
    email: string;
    password: string;
}

export interface CreateUserInput {
    email: UserDocument['email'];
    username: UserDocument['username'];
    password: UserDocument['password'];
}