import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const deleteResults = (state, action) =>{
  const newArray = state.results.filter(result => result.id !== action.resultId);
  return updateObject(state, {results: newArray});
};

const resultReducer = (state = initialState, action) => {
  switch(action.type) {
      case actionType.STORE_RESULT :
        return updateObject(state, {results: state.results.concat({
          id: new Date(),
          value: action.result
        })});
      case actionType.DELETE_RESULT :
        return deleteResults(state,action);
      default: 
        return state
  }
}

export default resultReducer;