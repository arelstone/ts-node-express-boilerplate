import bcrypt from 'bcrypt';

export const hash = (text: string, rounds?: number) => {
    return bcrypt.hashSync(text, bcrypt.genSaltSync(rounds || 5))
}

export const compare = (one: string, two: string): boolean => {
    return bcrypt.compareSync(one, two);
}