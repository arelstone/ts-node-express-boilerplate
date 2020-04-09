import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { schemeOptions } from './utils/options';
import { UserDocument } from '../types/user.types';

const { Types }: typeof Schema = Schema;

const UserSchema: Schema = new Schema({
    username: { type: Types.String, required: true, minlength: 3, index: true, },
    email: { type: Types.String, unique: true, required: true, minlength: 5, index: true },
    password: { type: Types.String, minlength: 8, required: true },
}, {
    ...schemeOptions,
    skipVersioning: true,
});

UserSchema.plugin(uniqueValidator);

export default model<UserDocument>('User', UserSchema);
