import{EMAIL_WRONG,PASSWORD_WRONG,SET_CURRENT_USER}from '../actions/types'
const initialState = {
    isAuthenticated: false,
    EmailError: '',
    PasswordError: ''
};

export default function (state = initialState, action) {
  
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: action.payload,

            };
        case EMAIL_WRONG:            
            return {
                ...state,
                isAuthenticated: false,
                EmailError: "Enterd wrong Email",
                PasswordError: ''
            };

        case PASSWORD_WRONG:

            return {
                ...state,
                isAuthenticated: action.payload,
                PasswordError: "Enterd wrong password",
                EmailError: ''
            };
        default:
            return state;
    }
}