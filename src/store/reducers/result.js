import * as actionType from '../actions';

const initialState = {
  results: []
}

const resultReducer = (state = initialState, action) => {
  switch(action.type) {
      case actionType.STORE_RESULT :
        return {
          ...state,
          results: state.results.concat({
            id: new Date(),
            value: action.result
          })
        }
      case actionType.DELETE_RESULT :
        console.log(action.resultId);
        // const id = action.resultId;
        const newArray = state.results.filter(result => result.id !== action.resultId);
        console.log(newArray);
        return {
          ...state,
          results: newArray
        }
      default: 
        return state
  }
}

export default resultReducer;