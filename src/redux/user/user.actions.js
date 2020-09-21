import userTypes from './user.types';

export const setCurrentUSer = user => {
    return {
        type: userTypes.SET_USER,
        user
    }
}