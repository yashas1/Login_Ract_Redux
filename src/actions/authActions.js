import {EMAIL_WRONG,PASSWORD_WRONG,SET_CURRENT_USER} from './types'

export const loginUser = userData => dispatch => {
    const UserCheck= {
        user: {
              username:"hruday@gmail.com",
              password :'hruday123'   
        }
      }
       if (userData.email!=UserCheck.user.username)
       {
        dispatch({
            type:EMAIL_WRONG    
            })
       }
       else if(userData.password!=UserCheck.user.password)
       {
        dispatch({           
            type:PASSWORD_WRONG
            })
       }
       else 
       {
        dispatch({
           type:SET_CURRENT_USER,
            payload:true
            })
       }   
  };