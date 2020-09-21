import userTypes from './user.types';

const INITIAL_STATE = {
    user: {}
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.SET_USER:
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state;
    }
}

export default userReducer;