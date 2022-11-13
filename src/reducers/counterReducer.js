import {increment,decrement,multipleByFive} from '../actions/counterActionType'
const initialState ={
    count:0
}
const counterReducer=(state=initialState,action)=>{
   switch(action.type){
      case increment:
         return {...initialState,count:state.count+1}
     case decrement:
         return {...initialState,count:state.count-1}
     case multipleByFive:
            return {...initialState,count:state.count*action.payload}
    default:
        return state;
   }
}

export default counterReducer;