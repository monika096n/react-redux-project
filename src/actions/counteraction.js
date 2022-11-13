import {increment,decrement,multipleByFive} from './counterActionType';

export const incrementFn=()=>{
    return{
        type:increment,
        payload:1
    }
}

export const decrementFn=()=>{
    return{
        type:decrement,
        payload:1
    }
}


export const multipleByNumFn=(num)=>{
    return{
        type:multipleByFive,
        payload:num
    }
}
