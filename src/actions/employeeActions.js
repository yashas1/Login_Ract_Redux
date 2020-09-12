import {GET_EMPLOYEE} from './types'

export const getEmployees=()=>(dispatch)=>{
    dispatch({
        type:GET_EMPLOYEE
        })
}

