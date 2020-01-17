import * as actionType from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.INCREMENT :
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1
      return newState;
      case actionType.DECREMENT :
        return {
          ...state,
          counter: state.counter - 1
        }
      case actionType.ADD :
        return {
          ...state,
          counter: state.counter + action.value
        }
      case actionType.SUB :
        return {
          ...state,
          counter: state.counter - action.value
        }
      case actionType.STORE_RESULT :
        return {
          ...state,
          results: state.results.concat({
            id: new Date(),
            value: state.counter
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

export default reducer;