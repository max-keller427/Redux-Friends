import {
 LOGIN_START 
 LOGIN_SUCCESS 
 LOGIN_FAILURE 
 FRIENDS_START 
 FRIENDS_SUCCESS 
 FRIENDS_FAILURE
 ADD_START 
 ADD_SUCCESS 
 ADD_FAILURE 
} from '../actions';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    loginError: '',
    savingFriends: false,
    updatingFriend: false,
    error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:  {
        return {
            ...state,
            loginError: '',
            loggingIn: true,
        }
    }
    case LOGIN_SUCCESS : {
        return {
            ...state,
            loggingIn: false,
        }
    }
    case LOGIN_FAILURE: {
        return {
            ...state,
            loginError: 'Login Failed'
            loggingIn: false
        }
    }
    case ADD_START: {
        return {
            ...state,
            error: '',
            fetchingFriends: true;
        }
    }
    case ADD_SUCCESS: {
        console.log(action.payload)
        return {
            ...state,
            error: '',
            fetchingFriends: false,
            friends: action.payload
        }
    }
    case ADD_FAILURE: {
        return {
            ...state,
            error: action.payload.status
        }
    }
  }
};

export default reducer;
